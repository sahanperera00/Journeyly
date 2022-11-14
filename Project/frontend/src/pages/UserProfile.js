import React from "react";
import "../styles/nash/UserProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { deleteUser } from "firebase/auth";
import auth from "../firebase";
import sun from "../images/brightness.png";
import place from "../images/Sigiriya.jpg";
import star from "../images/star.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const [selected, setSelected] = useState(new Date());

  const { id } = useParams();
  const navigate = useNavigate();

  const getClient = () => {
    axios
      .get("http://localhost:8070/client/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setContactNo(res.data.contactNo);
        // setUsername(res.data.username);
        setPassword(res.data.password);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteClient = async (id) => {
    try {
      await deleteUser(auth.currentUser);
      axios
        .delete(`http://localhost:8070/client/delete/${id}`)
        .then(() => {
          sessionStorage.removeItem("ID");
          alert("User account deleted");
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      alert("Error!Could not delete user");
      console.log(error);
    }
  };
  useEffect(() => {
    getClient();
  }, [id]);
  // console.log(client);

  return (
    <div className="profilecontainer w-100">
      <div className="userprofiletopic">
        <h1>User Profile</h1>{" "}
      </div>
      {/* <div className='userprofilecontainer'> */}

      <div
        style={{ overflow: "scroll" }}
        className="card-container position-relative shadow-lg bg-transparent"
      >
        <div className="upper-container"></div>

        <div className="lower-container d-flex">
          {/* user profile */}
          <Card className="border-0 shadow-lg bg-white profile-container rounded-4">
            <div className="image-container mx-auto mt-1 shadow-lg rounded-circle">
              <Card.Img
                variant="top"
                src={
                  image || "https://i.ibb.co/pzpVdPV/no-user-image-icon-3.jpg"
                }
              />
            </div>

            <Card.Body className="d-flex flex-column justify-content-between mt-1">
              <Card.Text className="mx-auto w-100 px-xxl-2">
                <table className="tableprofile" style={{ width: "100%" }}>
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
                    <th> password: </th>
                    <td>{password}</td>
                  </tr>
                </table>
              </Card.Text>
              <div className="btnprofile">
                <Link to={`/ClientDashboard/${id}/updateProfile`}>
                  <Button variant="warning">Update</Button>
                </Link>
                <Button
                  variant="danger"
                  className="ms-3"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this account?"
                      )
                    )
                      deleteClient(id);
                  }}
                >
                  Delete Account
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* recent card */}
          <Card className="info-card border-0 ms-2 gray-bg shadow-lg p-2 rounded-4">
            <Card.Body className="p-0">
              <div className="mx-auto recent-container rounded-4 shadow">
                <div className="overlay"></div>
                <img src={place} className="w-100 h-100" alt="" />
                <p className="recent-title">Recently Travelled</p>
                <div className="recent-content">
                  <div>
                    <p className="m-1 fs-6">Sigiriya</p>
                    <p className="m-1 fs-6">Central Province, Sri Lanka</p>
                  </div>
                  <p className="d-flex align-items-center fs-4 my-auto">
                    <img
                      src={star}
                      className="me-1"
                      alt=""
                      style={{ width: "32px" }}
                    />
                    4.7
                  </p>
                </div>
              </div>

              <div className="d-flex mt-2 w-100 align-items-center gap-2 extra-container">
                {/* weather card */}
                <Card className="shadow h-100 weather-card border-0 rounded-4">
                  <div class="weather-container w-100">
                    <div class="background">
                      <div class="Circle1"></div>
                      <div class="Circle2"></div>
                      <div class="Circle3"></div>
                      <div class="content">
                        <h1 class="Condition">
                          <img className="sun" src={sun} alt="" /> Sunny
                        </h1>
                        <h1 class="Temp">
                          72<span id="F">&#176;F</span>
                        </h1>
                        <h1 class="Time">09:35</h1>
                        <h1 class="Location">Colombo, SL</h1>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* calender card */}
                <div className="bg-white py-1 ms-auto rounded-2 shadow rounded-4 calender">
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
