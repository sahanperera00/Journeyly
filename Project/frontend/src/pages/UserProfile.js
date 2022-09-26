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
    
      <div className='userprofiletopic'><h1>User Profile</h1>
        <div className='userprofilecontainer'>

             <div className='card-container'>

              <div className='upper-container'>
          
                <div className='image-container'>
                <img src="https://img.icons8.com/fluency/96/000000/user-male-circle.png"/>
                </div>
        <div className='lower-container'>
        
        <table className='tableprofile' style={{ width: '80%'}}>
            <tr> 
              <th> First name: </th> 
              <td>{firstName}</td>
            </tr>
            
            <tr> 
              <th> Last name: </th> 
              <td>{lastName}</td>
            </tr>

            <tr> 
              <th> Email: </th> 
              <td>{email}</td>
            </tr>

            <tr> 
              <th> Contact Number: </th> 
              <td>{contactNo}</td>
            </tr>

            <tr> 
              <th> Username: </th> 
              <td>{username}</td>
            </tr>

            <tr> 
              <th> password: </th> 
              <td>{password}</td>
            </tr>
              
          </table> 
          <div className='btnprofile'>
           <Link to={`/ClientDashboard/${id}/updateProfile`}>
            <Button variant="warning">Update</Button>
          </Link> 
          <Button variant="danger" className='ms-3' onClick={() => deleteClient(id)}>Delete</Button>
          </div>
          </div>
          </div>
        </div>
        </div>
       
        </div>
        
   )
    
  }
export default UserProfile;