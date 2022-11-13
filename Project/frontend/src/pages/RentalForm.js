import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Madusha/Rental.css";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function RentalForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [startDes, setStartDes] = useState("");
  const [endDes, setEndDes] = useState("");

  const [vehicle, setVehicle] = useState("");

  const [destination, setDestination] = useState([]);
  const [hotel, setHotel] = useState([]);

  const { id } = useParams();

  const handleOnChangeSD = (e) => {
    setStartDes(e.target.value);
  };

  const handleOnChangeED = (e) => {
    setEndDes(e.target.value);
  };

  const getVehicle = async () => {
    await axios
      .get("http://localhost:8070/vehicles/" + id)
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getVehicle();
  }, [id]);
  const navigate = useNavigate();

  const getDestination = async () => {
    await axios
      .get("http://localhost:8070/destination/")
      .then((res) => {
        setDestination(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDestination();
  });

  const getHotel = async () => {
    await axios
      .get("http://localhost:8070/hotels/")
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getHotel();
  });

  return (
    <div id="rentalform" className="rentalContainer">
      <NavbarDark />

      <h1>Rental Details</h1>
      <div className="rentaleinnercontainer">
        <div className="rentalformcont">
          <form
            className="rentalform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newRental = {
                vehicleId: vehicle._id,
                userID: sessionStorage.getItem("ID"),
                driverName: vehicle.driverName,
                firstName,
                lastName,
                email,
                phoneNo,
                date,
                time,
                startDes,
                endDes,
              };
              console.log(newRental);

              axios
                .post("http://localhost:8070/rental/create", newRental)
                .then(() => {
                  alert("Vehicle Rented successfully");
                  navigate("/taxis");
                })
                .catch((err) => {
                  alert("Error making the rent");
                  console.log(err);
                });
            }}
          >
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                pattern="[a-z,A-Z]{3,}"
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
                pattern="[a-z,A-Z]{3,}"
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
                pattern="[a-z0-9]+@+[a-z]+.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                pattern="[0-9]{10}"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>

            {/* <div className="form-group">
              <label className="form-label">Starting Destination</label>
              <input type="text" className="form-control" onChange={(e) => {setStartDes(e.target.value)}} required/>
            </div> */}

            <div className="form-group">
              <label className="form-label">Starting Destination</label>
              <select
                className="form-control"
                value={startDes}
                onChange={handleOnChangeSD}
                required
              >
                <option
                  value="Select the starting Destination"
                  selected
                  disabled="true"
                >
                  Select the starting Destination
                </option>
                <option value="destinations" selected disabled="true">
                  --------- Attractions ---------
                </option>
                {destination.map((result) => (
                  <option value={destination.name}>{result.name}</option>
                ))}
                <option value="hotels" selected disabled="true">
                  --------- Hotels ---------
                </option>
                {hotel.map((a) => (
                  <option value={hotel.name}>{a.name}</option>
                ))}
                <option value="airports" selected disabled="true">
                  --------- Airports ---------
                </option>
                <option value="Katunayaka Airpor">Katunayaka Airport</option>
                <option value="Maththala Airport">Maththala Airport</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Ending Destination</label>
              <select
                className="form-control"
                value={endDes}
                onChange={handleOnChangeED}
                required
              >
                <option value="Select the Arrival" selected disabled="true">
                  Select the Arrival Destination
                </option>
                <option value="destinations" selected disabled="true">
                  --------- Attractions ---------
                </option>
                {destination.map((result) => (
                  <option value={destination.name}>{result.name}</option>
                ))}
                <option value="hotels" selected disabled="true">
                  --------- Hotels ---------
                </option>
                {hotel.map((a) => (
                  <option value={hotel.name}>{a.name}</option>
                ))}
                <option value="airports" selected disabled="true">
                  --------- Airports ---------
                </option>
                <option value="Katunayaka Airpor">Katunayaka Airport</option>
                <option value="Maththala Airport">Maththala Airport</option>
              </select>
            </div>
            <br />

            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
        <div className="rentcont">
          <div className="rent">
            <p>
              Name : {firstName} {lastName}{" "}
            </p>
            <p>Email :{email}</p>
            <p>Phone Number :{phoneNo}</p>
            <p>Date :{date}</p>
            <p>Time :{time}</p>
            <p>Starting Destination :{startDes}</p>
            <p>Ending Destination: {endDes}</p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default RentalForm;
