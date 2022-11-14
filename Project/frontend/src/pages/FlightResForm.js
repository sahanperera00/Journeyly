import "../styles/sudul/flightResForm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function seat() {
  var seatCount = 0;
  const containers = document.querySelector(".containers");

  containers.addEventListener("click", (e) => {
    if (e.target.className == "seat" && seatCount == 0) {
      e.target.className = "seat selected";
      sessionStorage.setItem("value", e.target.id);
      seatCount++;
      console.log("+");
    } else if (e.target.className == "seat selected") {
      e.target.className = "seat";
      sessionStorage.removeItem("value");
      seatCount--;
      console.log("-");
    }
  });
}
setTimeout(seat, 1000);

function FlightResForm() {
  const [flight, setFlight] = useState([]);

  const { id } = useParams();

  const getUniqueFlight = async () => {
    await axios
      .get("http://localhost:8070/flights/" + id)
      .then((res) => {
        setFlight(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getUniqueFlight();
  }, [id]);
  function radio(value) {
    if (value == "BusinessClass") {
      setPrice(flight.businessClass);
      setClass("Business Class");
      var nonoccupied;
      for (var i = 0; i < flight.bookedSeatsEconomy.length; i++) {
        nonoccupied = document.getElementById(flight.bookedSeatsEconomy[i]);
        nonoccupied.className = "seat";
      }
      var inBusiness, charactor;
      charactor = "D";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "none";
      }
      charactor = "E";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "none";
      }
      charactor = "F";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "none";
      }
      var occupied;
      for (var i = 0; i < flight.bookedSeatsBusiness.length; i++) {
        occupied = document.getElementById(flight.bookedSeatsBusiness[i]);
        occupied.className = "seat occupied";
      }
    } else {
      setPrice(flight.economyClass);
      setClass("Economy Class");
      var nonoccupied;
      for (var i = 0; i < flight.bookedSeatsBusiness.length; i++) {
        nonoccupied = document.getElementById(flight.bookedSeatsBusiness[i]);
        nonoccupied.className = "seat";
      }
      var inBusiness, charactor;
      charactor = "D";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "";
      }
      charactor = "E";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "";
      }
      charactor = "F";
      for (var i = 1; i < 9; i++) {
        console.log(charactor);
        inBusiness = document.getElementById(charactor + i);
        inBusiness.style.display = "";
      }
      var occupied;
      for (var i = 0; i < flight.bookedSeatsEconomy.length; i++) {
        occupied = document.getElementById(flight.bookedSeatsEconomy[i]);
        occupied.className = "seat occupied";
      }
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [passportID, setppID] = useState("");
  const [classType, setClass] = useState("");
  const [price, setPrice] = useState("");
  const [selSeat, setSeat] = useState("");

  const navigate = useNavigate();

  return (
    <div id="flightresform" className="flightresContainer">
      <NavbarDark />
      <br />
      <h1>Flight Reservation</h1>
      <h15 id="enabler" onClick={() => window.location.reload()}>
        Click Once to Enable Seat Selector
      </h15>
      <div className="flightreseinnercontainer">
        <div className="flightresformcont">
          <form
            className="flightresform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newTicket = {
                flightID: flight._id,
                flightName: flight.name,
                airline: flight.airline,
                startAirport: flight.startAirport,
                departureDate: flight.departureDate,
                departureTime: flight.departureTime,
                destinationAirport: flight.destinationAirport,
                userID: sessionStorage.getItem("ID"),
                firstName,
                lastName,
                email,
                phoneNo,
                passportID,
                classType,
                seatNo: sessionStorage.getItem("value"),
                gate: flight.gate,
                economyClass: flight.economyClass,
                businessClass: flight.businessClass,
                price,
              };

              console.log(newTicket);

              axios
                .post("http://localhost:8070/flightTicket/create", newTicket)
                .then(() => {
                  alert("Ticket added successfully");
                  if (classType == "Economy Class") {
                    var bookedseats = [];
                    for (var i = 0; i < flight.bookedSeatsEconomy.length; i++) {
                      bookedseats[i] = flight.bookedSeatsEconomy[i];
                    }
                    bookedseats[flight.bookedSeatsEconomy.length] =
                      sessionStorage.getItem("value");
    
                    // bookedseats.append();
                    const tickFlight = {
                      bookedSeatsEconomy: bookedseats,
                    };
    
                    axios
                      .put("http://localhost:8070/flights/update/" + id, tickFlight)
                      .then(() => {
                        alert("Flight updated successfully");
                        sessionStorage.removeItem("value");
                      })
                      .catch((err) => {
                        alert(err);
                      });
                  } else if (classType == "Business Class") {
                    var bookedseats = [];
                    for (var i = 0; i < flight.bookedSeatsBusiness.length; i++) {
                      bookedseats[i] = flight.bookedSeatsBusiness[i];
                    }
                    bookedseats[flight.bookedSeatsBusiness.length] =
                      sessionStorage.getItem("value");
    
                    // bookedseats.append();
                    const tickFlight = {
                      bookedSeatsBusiness: bookedseats,
                    };
    
                    axios
                      .put("http://localhost:8070/flights/update/" + id, tickFlight)
                      .then(() => {
                        alert("Flight updated successfully");
                        sessionStorage.removeItem("value");
                      })
                      .catch((err) => {
                        alert(err);
                      });
                  }
                  navigate("/flights");

                })
                .catch((err) => {
                  alert("Error adding ticket");
                  console.log(err);
                });

              
            }}
          >
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
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
                placeholder="Enter Last Name"
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
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact Number"
                min="0110000000"
                max="0799999999"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Passport ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Passport ID"
                onChange={(e) => {
                  setppID(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Class Type</label>
              {/* <select class="form-select" aria-label="Default select example" onChange={(e) => {setClass(e.target.value)}} required>
               <option value="Economy Class">Economy Class</option>
               <option value="Business Class">Business Class</option>
              </select> */}
              <br />
              <input
                type="radio"
                name="cls"
                value="EconomyClass"
                onChange={(e) => {
                  radio(e.target.value);
                }}
              />
              Economy Class
              <br />
              <input
                type="radio"
                name="cls"
                value="BusinessClass"
                onChange={(e) => {
                  radio(e.target.value);
                }}
              />
              Business Class
            </div>
            <br />
            <ul class="showcase">
              <li>
                <div className="seat"></div>
                <small>N/A</small>
              </li>

              <li>
                <div className="seat selected"></div>
                <small>Selected</small>
              </li>

              <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
              </li>
            </ul>

            <div
              className="containers"
              onClick={() => {
                setSeat(sessionStorage.getItem("value"));
              }}
            >
              <div className="screen"></div>
              <div className="row">
                <div className="seat" id="A1"></div>
                <div className="seat" id="A2"></div>
                <div className="seat" id="A3"></div>
                <div className="seat" id="A4"></div>
                <div className="seat" id="A5"></div>
                <div className="seat" id="A6"></div>
                <div className="seat" id="A7"></div>
                <div className="seat" id="A8"></div>
              </div>
              <div className="row">
                <div className="seat" id="B1"></div>
                <div className="seat" id="B2"></div>
                <div className="seat" id="B3"></div>
                <div className="seat" id="B4"></div>
                <div className="seat" id="B5"></div>
                <div className="seat" id="B6"></div>
                <div className="seat" id="B7"></div>
                <div className="seat" id="B8"></div>
              </div>

              <div className="row">
                <div className="seat" id="C1"></div>
                <div className="seat" id="C2"></div>
                <div className="seat" id="C3"></div>
                <div className="seat" id="C4"></div>
                <div className="seat" id="C5"></div>
                <div className="seat" id="C6"></div>
                <div className="seat" id="C7"></div>
                <div className="seat" id="C8"></div>
              </div>

              <div className="row">
                <div className="seat" id="D1"></div>
                <div className="seat" id="D2"></div>
                <div className="seat" id="D3"></div>
                <div className="seat" id="D4"></div>
                <div className="seat" id="D5"></div>
                <div className="seat" id="D6"></div>
                <div className="seat" id="D7"></div>
                <div className="seat" id="D8"></div>
              </div>

              <div className="row">
                <div className="seat" id="E1"></div>
                <div className="seat" id="E2"></div>
                <div className="seat" id="E3"></div>
                <div className="seat" id="E4"></div>
                <div className="seat" id="E5"></div>
                <div className="seat" id="E6"></div>
                <div className="seat" id="E7"></div>
                <div className="seat" id="E8"></div>
              </div>

              <div className="row">
                <div className="seat" id="F1"></div>
                <div className="seat" id="F2"></div>
                <div className="seat" id="F3"></div>
                <div className="seat" id="F4"></div>
                <div className="seat" id="F5"></div>
                <div className="seat" id="F6"></div>
                <div className="seat" id="F7"></div>
                <div className="seat" id="F8"></div>
              </div>
            </div>
            <script src="FlightResForm.js"></script>

            <button type="submit" className="submitbtn1">
              Submit
            </button>
          </form>
        </div>
        <div className="flightrestcktcont">
          <div className="flightrestckt">
            <center>
              <h3>{flight.name}</h3>
              <h5>{flight.airline}</h5>
            </center>
            <br />
            <p>Starting Airport : {flight.startAirport}</p>
            <p>Departure Date : {flight.departureDate} (GMT+5.30)</p>
            <p>Departure Time : {flight.departureTime} (GMT+5.30)</p>
            <p>Destination Airport : {flight.destinationAirport}</p>
            <p>
              Name : {firstName} {lastName}
            </p>
            <p>Email Address : {email}</p>
            <p>Phone Number : {phoneNo}</p>
            <p>Passport ID : {passportID}</p>
            <p>Class : {classType}</p>
            <p>Seat : {selSeat}</p>
            <p>Gate : {flight.gate}</p>
            <br />
            <h3>Total : {price}</h3>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default FlightResForm;
