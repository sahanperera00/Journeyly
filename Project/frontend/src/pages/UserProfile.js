import React from 'react'
import '../styles/nash/UserProfile.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function UserProfile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const getClient = () => {
      axios.get("http://localhost:8070/client/"+id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setContactNo(res.data.contactNo);
          setUsername(res.data.username);
          setPassword(res.data.password);
        })
        .catch((err) => {
          alert(err);
        });
    }

    const deleteClient = (id) => {
      axios.delete(`http://localhost:8070/client/delete/${id}`)  
          .then(() => {
              alert("User account deleted");
              navigate('/');
          })
          .catch((err) => {
              alert(err);
          });
      }
    
    useEffect(() => { getClient() }, [id]);
    // console.log(client);

   return (
   <div className='userprofilecontainer'>
        <h1>User Profile</h1>
        <div>
           First name: {firstName}<br/>
           Last name: {lastName}<br/>
           Email: {email}<br/>
           Contact Number: {contactNo}<br/>
           Username: {username}<br/>
           Password: {password}<br/>
          <br/>

          {/* <Link to={"/UserDashboard/ProfileUpdateForm/" + id}>
            <Button variant="warning">Update</Button>
          </Link> */}

<Link key={`${id} + 4`} to={"/UserDashboard/ProfileUpdateForm/"+id}>
                  <Button key={`${id} + 1`} variant="warning">Update</Button>
                </Link>
          <Button variant="danger" className='ms-3' onClick={() => deleteClient(id)}>Delete</Button>
        </div>
        </div>
   )
    
  }
export default UserProfile;