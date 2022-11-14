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
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleOnChange5 = () => {
    setIsChecked5(!isChecked5);
  };

  const handleOnChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleOnChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleOnChange1 = () => {
    setIsChecked1(!isChecked1);
  };

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
            Airport
            <br />
            <br />
            <input
              className="flightSearchInput"
              type="text"
              placeholder="Search by airport"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <hr />
            Airline
            <br />
            <br />
            <div className="hotelSeatCount">
              <input
                disabled={isChecked4 || isChecked3 || isChecked2 || isChecked1}
                checked={isChecked5}
                onChange={handleOnChange5}
                type="checkbox"
                name="5seats"
                value="5"
              />{" "}
              Emirates
              <br />
              <input
                disabled={isChecked5 || isChecked3 || isChecked2 || isChecked1}
                checked={isChecked4}
                onChange={handleOnChange4}
                type="checkbox"
                name="4seats"
                value="4"
              />{" "}
              IndiGo
              <br />
              <input
                disabled={isChecked5 || isChecked4 || isChecked2 || isChecked1}
                checked={isChecked3}
                onChange={handleOnChange3}
                type="checkbox"
                name="3seats"
                value="3"
              />{" "}
              Qantas Airways
              <br />
              <input
                disabled={isChecked5 || isChecked4 || isChecked3 || isChecked1}
                checked={isChecked2}
                onChange={handleOnChange2}
                type="checkbox"
                name="2seats"
                value="2"
              />{" "}
              Qatar Airways
              <br />
              <input
                disabled={isChecked5 || isChecked4 || isChecked3 || isChecked2}
                checked={isChecked1}
                onChange={handleOnChange1}
                type="checkbox"
                name="2seats"
                value="1"
              />{" "}
              Sri Lankan Airlines
            </div>
          </div>
          <div className="flightBodyContainer">
            {flights
              .filter((data) => {
                if (data.economyClass != null) {
                  if (searchTerm == "") {
                    if (isChecked5) {
                      if (
                        data.airline
                          .toLowerCase()
                          .includes("Emirates".toLowerCase())
                      ) {
                        return data;
                      }
                    } else if (isChecked4) {
                      if (
                        data.airline
                          .toLowerCase()
                          .includes("IndiGo".toLowerCase())
                      ) {
                        return data;
                      }
                    } else if (isChecked3) {
                      if (
                        data.airline
                          .toLowerCase()
                          .includes("Qantas Airways".toLowerCase())
                      ) {
                        return data;
                      }
                    } else if (isChecked2) {
                      if (
                        data.airline
                          .toLowerCase()
                          .includes("Qatar Airways".toLowerCase())
                      ) {
                        return data;
                      }
                    } else if (isChecked1) {
                      if (
                        data.airline
                          .toLowerCase()
                          .includes("Sri Lankan Airlines".toLowerCase())
                      ) {
                        return data;
                      }
                    } else {
                      return data;
                    }
                  } else if (
                    data.startAirport
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  } else if (
                    data.destinationAirport
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
                          <div className="col-8">
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
                          <div className="col-4" style={{ textAlign: "end" }}>
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
                              person_filled
                            </span>
                              {"  "}
                              <b>Rs {data.economyClass}.00</b>
                            </h5>
                          </div>

                          <div className="col-6" style={{ textAlign: "end" }}>
                            <h5>
                              <span class="material-symbols-outlined">
                                attach_money
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
