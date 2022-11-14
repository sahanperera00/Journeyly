import { useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../styles/Madusha/VehicleForm.css";

function VehicleForm() {
  const [type, settype] = useState("");
  const [vehicleType, setvehicleType] = useState("Car");
  const [driverName, setdriverName] = useState("");
  const [ownerName, setownerName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [fee, setfee] = useState("");
  const [image, setImage] = useState("");
  const [seats, setseats] = useState("");
  const [transmission, settransmission] = useState("Automatic");
  const [pickup, setpickup] = useState("");

  const navigate = useNavigate();

  return (
    <div className="VehicleFormMainCont">
      <h1>Add Vehicle Details</h1>
      <div className="VehicleFormCont">
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //image
            const imageRef = ref(
              storage,
              `images/vehicles/${ownerName + image.name}`
            );

            uploadBytes(imageRef, image)
              .then(() => {
                console.log("Uploaded image");
              })
              .catch((err) => {
                console.log(err);
              });

            getDownloadURL(
              ref(storage, `images/vehicles/${ownerName + image.name}`)
            )
              .then((url) => {
                console.log(url);
                const newVehicle = {
                  type,
                  vehicleType,
                  driverName,
                  ownerName,
                  email,
                  phoneNo,
                  image: url,
                  seats,
                  transmission,
                  pickup,
                };

                axios
                  .post("http://localhost:8070/vehicles/create", newVehicle)
                  .then(() => {
                    alert("Vehicle Content added successfully");
                    navigate("/editorDashboard/editorWebContent/taxi");
                  })
                  .catch((err) => {
                    alert("Error adding Vehicle Content");
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
            //
          }}
        >
          <div className="form-group">
            <label className="form-label">Enter Model</label>
            {/* <select className="form-control" onChange={(e) => {
                        settype(e.target.value);
                    }} required> 
                        <option value = "Taxi" selected = "selected">Taxi</option>
                        <option value = "Rent-a-Car">Rent-a-Car</option>
                    </select> */}
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                settype(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Vehicle Type</label>
            <select
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{3,}"
              onChange={(e) => {
                setvehicleType(e.target.value);
              }}
              required
            >
              <option value="Car" selected="selected">
                Car
              </option>
              <option value="Van">Van</option>
              <option value="Three-Wheel">Three-Wheel</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Driver Name </label>
            <input
              type="text"
              className="form-control"
              pattern="[a-z,A-Z ]{3,}"
              onChange={(e) => {
                setdriverName(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              patter="[a-z,A-Z ]{3,}"
              onChange={(e) => {
                setownerName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              pattern="[a-z0-9]+@+[a-z]+.com"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9]{10}"
              onChange={(e) => {
                setphoneNo(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Add Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              required
            />
          </div>

          {/* <div className="form-group">
            <label className="form-label">Fee</label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9]{1,}"
              onChange={(e) => {
                setfee(e.target.value);
              }}
              required
            />
          </div> */}

          <div className="form-group">
            <label className="form-label">Seats</label>
            <input
              type="number"
              className="form-control"
              pattern="[0-9]"
              min={1}
              max={6}
              onChange={(e) => {
                setseats(e.target.value.toString());
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Transmission</label>
            <select
              className="form-control"
              onChange={(e) => {
                settransmission(e.target.value);
              }}
              required
            >
              <option value="Automatic" selected="selected">
                Automatic
              </option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Pickup</label>
            <input
              type="text"
              className="form-control"
              pattern="[a-z,A-Z ]{3,}"
              onChange={(e) => {
                setpickup(e.target.value);
              }}
              required
            />
          </div>

          <br />
          <button type="submit" className="submitbtn">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default VehicleForm;
