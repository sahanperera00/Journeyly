import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../styles/Madusha/VehicleUpdateForm.css";

function VehicleUpdateForm() {
  const [type, settype] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [driverName, setdriverName] = useState("");
  const [ownerName, setownerName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [fee, setfee] = useState("");
  const [image, setImage] = useState("");
  const [seats, setseats] = useState("");
  const [transmission, settransmission] = useState("");
  const [pickup, setpickup] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const newVehicle = () => {
    axios
      .get("http://localhost:8070/vehicles/" + id)
      .then((res) => {
        const updateVehicles = {
          type: res.data.type,
          vehicleType: res.data.vehicleType,
          driverName: res.data.driverName,
          ownerName: res.data.ownerName,
          email: res.data.email,
          phoneNo: res.data.phoneNo,
          fee: res.data.fee,
          image: res.data.image,
          seats: res.data.seats,
          transmission: res.data.transmission,
          pickup: res.data.pickup,
        };
        settype(updateVehicles.type);
        setvehicleType(updateVehicles.vehicleType);
        setdriverName(updateVehicles.driverName);
        setownerName(updateVehicles.ownerName);
        setemail(updateVehicles.email);
        setphoneNo(updateVehicles.phoneNo);
        setfee(updateVehicles.fee);
        setImage(updateVehicles.image);
        setseats(updateVehicles.seats);
        settransmission(updateVehicles.transmission);
        setpickup(updateVehicles.pickup);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    newVehicle();
  }, []);

  return (
    <div className="VehicleUpdateFormMainCont">
      <h1>Update Vehicle Details</h1>
      <div className="VehicleUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

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

            await getDownloadURL(
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
                  seats,
                  transmission,
                  pickup,
                };

                axios
                  .put(
                    "http://localhost:8070/vehicles/update/" + id,
                    newVehicle
                  )
                  .then(() => {
                    alert("vehicles updated successfully");
                    navigate("/editorDashboard/editorWebContent/taxi");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <div className="form-group">
            <label className="form-label">Model</label>
            <input
              type="text"
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{3,}"
              value={type}
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
            <label className="form-label">Driver Name</label>
            <input
              type="text"
              className="form-control"
              value={driverName}
              pattern="[a-zA-Z ]{3,}"
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
              value={ownerName}
              pattern="[a-zA-Z ]{3,}"
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
              value={email}
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
              value={phoneNo}
              pattern="[0-9]{10}"
              onChange={(e) => {
                setphoneNo(e.target.value);
              }}
            />
          </div>
          {/* <div className="form-group">
            <label className="form-label">Images</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              required
            />
          </div> */}
          {/* <div className="form-group">
            <label className="form-label">Fee</label>
            <input
              type="Number"
              className="form-control"
              value={fee}
              onChange={(e) => {
                setfee(e.target.value);
              }}
              required
            />
          </div> */}
          <div className="form-group">
            <label className="form-label">Seats</label>
            <input
              type="Number"
              className="form-control"
              value={seats}
              pattern="[0-9]"
              min={1}
              max={6}
              onChange={(e) => {
                setseats(e.target.value);
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
              value={pickup}
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

export default VehicleUpdateForm;
