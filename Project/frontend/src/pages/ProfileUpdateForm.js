import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
 


function ProfileUpdateForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContact] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');

    
    const {id} = useParams();
    const navigate = useNavigate();
  
    const getClient = () => {   
        axios.get("http://localhost:8070/client/" + id)
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setContact(res.data.contactNo);
                // setUsername(res.data.username);
                setPassword(res.data.password);
                setImage(res.data.image);
               
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getClient() }, []);

    return (

        <div>
            
            <h1 className='text-center'>Update User Profile</h1>
            <div className="App">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `image/client/${image}`);

                    uploadBytes(imageRef, image)
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        });

                    await getDownloadURL(ref(storage, `image/client/${image}`))
                        .then((url) => {
                            console.log(url);

                            const newClient = {
                                firstName,
                                lastName,
                                email,
                                contactNo,
                                // username,
                                password,
                                image
                            };

                            axios.put("http://localhost:8070/client/update/" + id, newClient)
                                .then(() => {
                                    alert("Profile updated successfully");
                                    navigate('/ClientDashboard/'+id);
                                }).catch((err) => {
                                    alert(err);
                                })

                            }).catch((err) => {
                            console.log(err);
                        });
                    }}>

<div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" value={firstName} 
                        onChange={(e) => { setFirstName(e.target.value) }} required/>
                    </div>
                   
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={lastName} 
                        onChange={(e) => { setLastName(e.target.value) }} required/>
                    </div>
                   
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" value={email} 
                        onChange={(e) => { setEmail(e.target.value) }} required/>
                    </div>
                   
                    <div className="form-group">
                        <label className="form-label">Contact Number</label>
                        <input type="text" className="form-control" value={contactNo}
                         onChange={(e) => { setContact(e.target.value) }} required/>
                    </div>
                   
                    {/* <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} 
                        onChange={(e) => { setUsername(e.target.value) }} required/>
                    </div>
                    */}
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" value={password} 
                        onChange={(e) => { setPassword(e.target.value) }} required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Upload profile picture</label>
                        <input type="file" className="form-control" onChange={(e) => {
                            setImage(e.target.files[0]);
                            }}  />
                    </div>
                  
                   <br />
                   
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                    </form>
</div></div>
)

}

export default ProfileUpdateForm;