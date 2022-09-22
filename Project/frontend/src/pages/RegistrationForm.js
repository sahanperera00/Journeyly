import { useState } from 'react';
import axios from 'axios';

function RegistrationForm(){
    const [firstName, setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [contactNo,setContactNo]=useState('');
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    return (
        <div>
            <h1 className='text-center'>Registration</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();

                const newClient = {
                    firstName,
                    lastName,
                    email,
                    contactNo,
                    username,
                    password
   
                }

                axios.post("http://localhost:8070/client/create", newClient)
                    .then(() => {
                        alert("Registration successfull!");
                    }).catch((err) => {
                        alert("Unsuccessful!");
                        console.log(err);
                    })
            }}>

                <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" 
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Contact Number</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setContactNo(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" min="0" max="5"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" 
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="signup" className="btn btn-dark">Sign Up</button><br /><br />
                <a href="/RegistrationForm">Already Have an Account? Sign in</a>
            </form>
        </div>
        </div>
    )
}


export default RegistrationForm;