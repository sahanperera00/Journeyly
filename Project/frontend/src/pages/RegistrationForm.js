import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/nash/RegistrationForm.css";
import { useCallback } from "react";
import Navbar from "../components/Navbar";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");

  const newClient = {
    firstName,
    lastName,
    email,
    contactNo,
    // username,
    password,
  };

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      signOut(auth);
      axios
        .post("http://localhost:8070/client/create", newClient)
        .then(() => {
          alert("Registration successfull!");
          navigate("/");
        })
        .catch((err) => {
          alert("Unsuccessful!");
          console.log(err);
        });
    }
    if (gUser) {
      const googleClient = {
        firstName: "No name",
        lastName: "No name",
        email: gUser.user?.email,
        contactNo: "No contact",
        // username: "No username",
        password: "No Password",
      };

      axios
        .post("http://localhost:8070/client/create", googleClient)
        .then(() => {
          alert("Registration successfull!");
          signOut(auth);
          navigate("/");
        })
        .catch((err) => {
          alert("Unsuccessful!");
          signOut(auth);
          console.log(err);
        });
    }

    if (error || gError) alert("Unsuccessful!");
  }, [user, gUser, error, gError]);

  return (
    <div className="RegistrationFormMainCont">
      <Navbar />
      <div className="RegistrationFormInnerCont">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="RegistrationFormCont">
          <h1 className="text-center">Create Account</h1>
          <br />
          <div className="App">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                await createUserWithEmailAndPassword(email, password);
              }}
            >
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="form-control"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  pattern="[a-z,A-Z]" title="Must contain only letters" required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  pattern="[a-z,A-Z]" title="Must contain only letters" required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  pattern="[._a-z0-9]+@+[a-z]+.com" required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter Contact Number"
                  className="form-control"
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                  pattern="[0-9]{10}"  title="Must contain only 10 digits"
                  required
                />
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
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  min="6" required
                />
              </div>
              <br />
              {loading ? (
                <button type="signup" className="whitebtn">
                  Signing Up...
                </button>
              ) : (
                <button type="signup" className="whitebtn">
                  Sign Up
                </button>
              )}
              <span
                className="whitebtn"
                onClick={() => {
                  signInWithGoogle();
                }}
              >
                <img
                  className="googleIcon"
                  src="https://i.ibb.co/XzVFGzb/google.png"
                  alt=""
                />
                Sign Up with Google
              </span>
              <br />
              <br />
              Already have an account? <Link to={"/"}>Log in</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
