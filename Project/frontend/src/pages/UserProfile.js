import React from 'react'
import '../styles/nash/UserProfile.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function UserProfile() {
  
    const[client, setClient] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    const fname = client.data.firstName;

    const getClient = () => {
      axios.get("http://localhost:8070/client/"+id)
        .then((res) => {
          setClient(res);
        })
        .catch((err) => {
          alert(err);
        });
    }

    const deleteClient = (id) => {
      axios.delete(`http://localhost:8070/client/remove/${id}`)  
          .then(() => {
              alert("User account deleted");
              navigate('/');
          })
          .catch((err) => {
              alert(err);
          });
      }
    
    useEffect(() => { getClient() }, [id]);
    console.log(client);

   return (
   <div className='userprofilecontainer'>
        <h1>User Profile</h1>
        <div>
           First name: {client.data.lastName}<br/>
           Last name: {client.data.lastName}<br/>
           Email: {client.data.email}<br/>
           Contact Number: {client.data.contactNo}<br/>
           Username: {client.data.username}<br/>
           Password: {client.data.password}<br/>
          <br/>

          <Link to={"/UserDashboard/ProfileUpdateForm/" + client._id}>
            <Button variant="warning">Update</Button>
          </Link>
          <Button variant="danger" className='ms-3' onClick={() => deleteClient(client._id)}>Delete</Button>
        </div>
        </div>
   )
    
  }
export default UserProfile;