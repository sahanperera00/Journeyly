import "../styles/sahan/DesResForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import BarCode from "react-barcode";
import Tilt from "../components/Tilt";

function DesResForm({ destination }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const navigate = useNavigate();

  const options = {
    reverse: true,
    speed: 1000,
    max: 10,
    glare: false,
    "max-glare": 0.1,
  };
  return (
    <div id="desresform" className="desresContainer">
      <h1 className="deresticketHeader">Buy a Ticket</h1>
      <div className="desreseinnercontainer">
        <div className="desrestcktcont">
          <Tilt options={options}>
            <div className="desrestckt">
              <div className="desrestcktinner">
                <div className="row">
                  <div
                    className="col-md-12 "
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      marginTop: "20px",
                      color: "black",
                    }}
                  >
                    <p>{destination.name} - Entrance Ticket</p>
                  </div>
                  <div className="col-md-3" style={{ fontSize: "12px" }}>
                    <p>Name :</p>
                  </div>
                  <div
                    className="col-md-9"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>
                      {firstName} {lastName}
                    </p>
                  </div>
                  <div className="col-md-3" style={{ fontSize: "12px" }}>
                    <p>Contact No :</p>
                  </div>
                  <div
                    className="col-md-4"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>{phoneNo}</p>
                  </div>
                  <div className="col-md-5" style={{ fontSize: "12px" }}>
                    <p>QR Code : </p>
                  </div>
                  <div className="col-md-3" style={{ fontSize: "12px" }}>
                    <p>Date : </p>
                  </div>
                  <div
                    className="col-md-9"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>{date}</p>
                  </div>
                  <div className="col-md-3" style={{ fontSize: "12px" }}>
                    <p>Time : </p>
                  </div>
                  <div
                    className="col-md-9"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>{time}</p>
                  </div>
                  <div className="col-md-2" style={{ fontSize: "12px" }}>
                    <p>Adults :</p>
                  </div>
                  <div
                    className="col-md-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>{adults}</p>
                  </div>
                  <div className="col-md-2" style={{ fontSize: "12px" }}>
                    <p>Children : </p>
                  </div>
                  <div
                    className="col-md-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    <p>{children}</p>
                  </div>
                  <div
                    className="col-md-6  text-end gx-4"
                    style={{ color: "black", transform: "rotate:180deg" }}
                  >
                    <h3>
                      Total : Rs{" "}
                      {destination.adultTicketSellingRate * adults +
                        destination.childTicketSellingRate * children}
                    </h3>
                  </div>
                  <div className="qrcont">
                    <QRCode
                      title="QR Code"
                      value={
                        destination.name +
                        firstName +
                        lastName +
                        phoneNo +
                        date +
                        time +
                        adults +
                        children
                      }
                      bgColor="#FFFFFF00"
                      fgColor="#000000"
                      size={80}
                    />
                  </div>
                  <div className="rotate">
                    <center>
                      <BarCode
                        value={destination._id + adults + children}
                        width={0.6}
                        height={30}
                        fontSize={10}
                        displayValue={true}
                        background="#FFFFFF00"
                      />
                    </center>
                  </div>
                </div>
              </div>
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fticket.png?alt=media&token=ed30c548-d368-40df-b445-03350ab7d9e5"
                }
                alt="destination"
              />
            </div>
          </Tilt>
        </div>
        <div className="desresformcont">
          <form
            className="row"
            onSubmit={async (e) => {
              e.preventDefault();

              const newTicket = {
                desId: destination._id,
                userID: sessionStorage.getItem("ID"),
                desName: destination.name,
                firstName,
                lastName,
                email,
                phoneNo,
                date,
                time,
                adults,
                children,
                total:
                  destination.adultTicketSellingRate * adults +
                  destination.childTicketSellingRate * children,
              };
              console.log(newTicket);

              axios
                .post("http://localhost:8070/desTicket/create", newTicket)
                .then(() => {
                  alert("Ticket added successfully");
                  navigate("/attractions");
                })
                .catch((err) => {
                  alert("Error adding ticket");
                  console.log(err);
                });
            }}
          >
            <div className="col-md-3">
              <label className="form-label">
                First Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                pattern="[a-z,A-Z]{3,}"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">
                Last Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                pattern="[a-z,A-Z]{3,}"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                pattern="[._a-z0-9]+@+[a-z]+.com"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">
                Phone Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="form-control"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="col-md-3 gy-2">
              <label className="form-label">
                Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="date"
                placeholder="Enter Date"
                className="form-control"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-3 gy-2">
              <label className="form-label">
                Time <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="time"
                placeholder="Enter Time"
                className="form-control"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-3 gy-2">
              <label className="form-label">
                Number of Adults <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="Number"
                placeholder="Enter Number of Adults"
                className="form-control"
                onChange={(e) => {
                  setAdults(e.target.value);
                }}
                min={0}
                max={10}
                required
              />
            </div>
            <div className="col-md-3 gy-2">
              <label className="form-label">
                Number of Children <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="Number"
                placeholder="Enter Number of Children"
                className="form-control"
                onChange={(e) => {
                  setChildren(e.target.value);
                }}
                min={0}
                max={10}
                required
              />
            </div>
            <br />
            <div className="col-md-12 gy-4">
              <button type="submit" className="blackbtn">
                Buy Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default DesResForm;
