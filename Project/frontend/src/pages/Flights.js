import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/sudul/flight.css";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function Flights() {
  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // created to catch and set the searching options

  const { id } = useParams();

  const getFlights = () => {
    axios
      .get("http://localhost:8070/flights")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className="flightMainContainer">
      <NavbarDark />
      <div className="flightInnerContainer">
        <h1 className="flightHeader">Flights</h1>
        <div className="flightContainer">
          <div className="flightSearch">
            Airline
            <br />
            <br />
            <input
              className="flightSearchInput"
              type="text"
              placeholder="Search by airline"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <hr />
          </div>
          <div className="flightBodyContainer">
            {flights
              .filter((data) => {
                if (data.economyClass != null) {
                  if (searchTerm == "") {
                    return data;
                  } else if (
                    data.airline
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  }
                }
              })
              .map((data) => {
                return (
                  <Link to={"/flightPreview/" + data._id}>
                    <div className="flightCardContainer">
                      <div className="flightImageContainer">
                        <img
                          className="flightCardImg"
                          alt="pic"
                          src={data.imageI}
                        />
                      </div>
                      <div className="flightTextContainer">
                        <div className="row">
                          <div className="col-7">
                            <h4 className="taxititlesec">
                              {data.flightId}{" "}
                              <span
                                style={{
                                  fontWeight: "normal",
                                  fontSize: "14px",
                                }}
                              >
                                {data.startAirport} - {data.destinationAirport}
                              </span>
                            </h4>
                          </div>
                          <div className="col-5" style={{ textAlign: "end" }}>
                            {data.airline}
                          </div>
                        </div>
                        {/* <br /> */}
                        <div className="row">
                          <div className="col-5">{data.departureDate}</div>
                          <div className="col-5">{data.arrivalDate}</div>
                          <div className="col-5">{data.departureTime}</div>
                          <div className="col-5">{data.arrivalTime}</div>
                          <div className="col-12" style={{ textAlign: "end" }}>
                            <br />
                          </div>
                          <div className="col-6" style={{ textAlign: "end" }}>
                            <h5>
                              <span class="material-symbols-outlined">
                                escalator_warning
                              </span>
                              {"  "}
                              <b>Rs {data.economyClass}.00</b>
                            </h5>
                          </div>

                          <div className="col-6" style={{ textAlign: "end" }}>
                            <h5>
                              <span class="material-symbols-outlined">
                                airline_seat_recline_extra
                              </span>
                              {"  "}
                              <b>Rs {data.businessClass}.00</b>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flights;
