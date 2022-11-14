import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import auth, { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  useUpdateEmail,
  useUpdatePassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import "../styles/nash/ProfileUpdateForm.css";

function ProfileUpdateForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // update imagae
  // const [updateProfile, updating, error] = useUpdateProfile(auth);
  // const [updateEmail, eUpdating, eError] = useUpdateEmail(auth);
  // const [updatePassword, passUpdating, passError] = useUpdatePassword(auth);

  const getClient = () => {
    axios
      .get("http://localhost:8070/client/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setContact(res.data.contactNo);
        // setUsername(res.data.username);
        setPassword(res.data.password);
        setImage(res.data.image);
        setClient(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="ProfileUpdateFormMainCont">
      <h1 className="text-center">Update User Profile</h1>
      <div className="ProfileUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            /* 
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

                            

                        }).catch((err) => {
                            console.log(err);
                        });

                        */

            let newClient = {};

            // updating image if changed by client
            if (file) {
              const formData = new FormData();
              formData.append("image", file);
              const imageApiKey = "772d81807f269fa7cc60900ab5a66310";

              try {
                const res = await axios.post(
                  `https://api.imgbb.com/1/upload?key=${imageApiKey}`,
                  formData
                );
                if (res.status === 200) {
                  await updateProfile(auth.currentUser, {
                    photoURL: res.data.data.url,
                  });
                  newClient = { ...newClient, image: res.data.data.url };
                }
              } catch (error) {
                alert("Could not update Profile Photo");
                console.log(error);
              }
            }

            // changing email if changed by client

            if (firstName !== client.firstName) {
              newClient = { ...newClient, firstName: firstName };
            }

            if (lastName !== client.lastName) {
              newClient = { ...newClient, lastName: lastName };
            }
            if (contactNo !== client.contactNo) {
              newClient = { ...newClient, contactNo: contactNo };
            }

            if (email !== client.email) {
              try {
                await updateEmail(auth.currentUser, email);
                newClient = { ...newClient, email: email };
              } catch (error) {
                alert("Could not update email");
                console.log(error);
              }
            }

            if (password !== client.password) {
              try {
                await updatePassword(auth.currentUser, password);
                newClient = { ...newClient, password: password };
              } catch (error) {
                alert("Could not update Password");
                console.log(error);
              }
            }

            axios
              .put("http://localhost:8070/client/update/" + id, newClient)
              .then(() => {
                setLoading(false);
                alert("Profile updated successfully");
                navigate("/ClientDashboard/" + id);
              })
              .catch((err) => {
                alert(err);
                setLoading(false);
              });
          }}
        >
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              pattern="[._a-z0-9]+@+[a-z]+.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              value={contactNo}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} 
                        onChange={(e) => { setUsername(e.target.value) }} required/>
                    </div>
                    */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              pattern="[0-9a-zA-Z]{6,}"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload profile picture</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>

          <br />

          {loading ? (
            <button type="submit" className="submitbtn">
              Loading...
            </button>
          ) : (
            <button type="submit" className="submitbtn">
              Submit
            </button>
          )}
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
