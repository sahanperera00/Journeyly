import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles/nash/RegistrationForm.css'
import { useCallback } from 'react';


function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const newClient = {
        firstName,
        lastName,
        email,
        contactNo,
        // username,
        password

    }

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    useEffect(() => {
        if (user) {
            signOut(auth);
            axios.post("http://localhost:8070/client/create", newClient)
                .then(() => {
                    alert("Registration successfull!");
                    navigate('/');
                }).catch((err) => {
                    alert("Unsuccessful!");
                    console.log(err);
                })
        }
        if (gUser) {
            const googleClient = {
                firstName: "No name",
                lastName: "No name",
                email: gUser.user?.email,
                contactNo: "No contact",
                // username: "No username",
                password: "No Password"

            }

            axios.post("http://localhost:8070/client/create", googleClient)
                .then(() => {
                    alert("Registration successfull!");
                    signOut(auth);
                    navigate('/');
                }).catch((err) => {
                    alert("Unsuccessful!");
                    signOut(auth);
                    console.log(err);
                })
        }

        if (error || gError) alert("Unsuccessful!");

    }, [user, gUser, error, gError]);


    return (
        <div>
            <br /><br /><br /><br />
            <h1 className='text-center'>Registration</h1>
            <div className="App">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    await createUserWithEmailAndPassword(email, password);
                }}>

                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}  required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}  required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} pattern="[a-z0-9]+@+[a-z]+.com" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Contact Number</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setContactNo(e.target.value);
                            }}  pattern='[0-9]{10}' title='Contact number should be 10 digits' required />
                    </div>
                    {/* <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" min="0" max="5"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }} required />
                    </div> */}
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} minLength='6' required />
                    </div>
                    <br />
                    {
                        loading
                            ? <button type="signup" className="btn btn-dark disabled">Signing Up...</button>
                            : <button type="signup" className="btn btn-dark">Sign Up</button>
                    }
                    <br /><br />
                
                    <span className='btn btn-outline-dark' onClick={() => {
                        signInWithGoogle();
                    }}>             
                        <img className='googleIcon' src="https://i.ibb.co/XzVFGzb/google.png" alt="" />
                        Sign Up with Google</span><br /><br />

                    Already have an account?
                    <Link to={"/"}>
                        Log in
                    </Link>

                </form>
            </div>
        </div>
    )
}


export default RegistrationForm;