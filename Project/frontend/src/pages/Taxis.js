import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Madusha/Taxis.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function Taxis() {
  const [taxis, setTaxis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [transAuto, setTransAuto] = useState(false);
  const [transManual, setTransManual] = useState(false);

  const handleOnChange6 = () => {
    setIsChecked6(!isChecked6);
  };

  const handleOnChange5 = () => {
    setIsChecked5(!isChecked5);
  };

  const handleOnChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleOnChangeauto = () => {
    setTransAuto(!transAuto);
  };

  const handleOnChangemanual = () => {
    setTransManual(!transManual);
  };

  const { id } = useParams();

  const getTaxis = () => {
    axios
      .get("http://localhost:8070/vehicles")
      .then((res) => {
        setTaxis(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getTaxis();
  }, []); //Shows changes of the page

  return (
    <div className="taxiMainContainer">
      <NavbarDark />
      <div className="taxiInnerContainer">
        <h1 className="taxiHeader">Taxis</h1>
        <div className="taxiContainer">
          <div className="taxiSearch">
            Pickup location
            <br />
            <br />
            <input
              className="taxiSearchInput"
              type="text"
              placeholder="Search by location"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <hr />
            Seat count
            <br />
            <br />
            <div className="taxiSeatCount">
              <input
                disabled={isChecked5 || isChecked4}
                checked={isChecked6}
                onChange={handleOnChange6}
                type="checkbox"
                name="6seats"
                value="6"
              />{" "}
              6 seats
              <br />
              <input
                disabled={isChecked6 || isChecked4}
                checked={isChecked5}
                onChange={handleOnChange5}
                type="checkbox"
                name="5seats"
                value="5"
              />{" "}
              5 seats
              <br />
              <input
                disabled={isChecked6 || isChecked5}
                checked={isChecked4}
                onChange={handleOnChange4}
                type="checkbox"
                name="4seats"
                value="4"
              />{" "}
              4 seats
              <hr />
              Transmission
              <br />
              <br />
              <div>
                <input
                  disabled={transManual}
                  checked={transAuto}
                  onChange={handleOnChangeauto}
                  type="checkbox"
                  name="auto"
                  value="auto"
                />{" "}
                Automatic
                <br />
                <input
                  disabled={transAuto}
                  checked={transManual}
                  onChange={handleOnChangemanual}
                  type="checkbox"
                  name="manual"
                  value="manual"
                />{" "}
                Manual
                <br />
              </div>
            </div>
          </div>
          <div className="taxiBodyContainer">
            {taxis
              .filter((data) => {
                if (searchTerm == "") {
                  if (isChecked6) {
                    if (data.seats.includes("6")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (isChecked5) {
                    if (data.seats.includes("5")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (isChecked4) {
                    if (data.seats.includes("4")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (transAuto) {
                    if (data.transmission.includes("Automatic")) {
                      return data;
                    }
                  } else if (transManual) {
                    if (data.transmission.includes("Manual")) {
                      return data;
                    }
                  } else {
                    return data;
                  }
                }
                //search by name
                else if (
                  data.pickup.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  if (isChecked6) {
                    if (data.seats.includes("6")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (isChecked5) {
                    if (data.seats.includes("5")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (isChecked4) {
                    if (data.seats.includes("4")) {
                      if (transAuto) {
                        if (data.transmission.includes("Automatic")) {
                          return data;
                        }
                      } else if (transManual) {
                        if (data.transmission.includes("Manual")) {
                          return data;
                        }
                      } else {
                        return data;
                      }
                    }
                  } else if (transAuto) {
                    if (data.transmission.includes("Automatic")) {
                      return data;
                    }
                  } else if (transManual) {
                    if (data.transmission.includes("Manual")) {
                      return data;
                    }
                  } else {
                    return data;
                  }
                }
              })
              .map((data) => {
                return (
                  <Link to={"/RentalPreview/" + data._id}>
                    <div className="taxiCardContainer">
                      <div className="taxiImageContainer">
                        <img
                          className="taxiCardImg"
                          alt="pic"
                          src={data.image}
                        />
                      </div>
                      <div className="taxiTextContainer">
                        <h4 className="taxititlesec">
                          {data.type}{" "}
                          <span
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                          >
                            or similar {data.vehicleType}
                          </span>
                        </h4>
                        <div className="row" style={{ width: "80%" }}>
                          <div className="col-6">
                            <span
                              style={{
                                fontSize: "18px",
                              }}
                              className="material-symbols-outlined"
                            >
                              person
                            </span>{" "}
                            <span>{data.seats} seats</span>
                          </div>
                          <div className="col-6">
                            <span
                              style={{
                                fontSize: "18px",
                              }}
                              className="material-symbols-outlined"
                            >
                              settings
                            </span>{" "}
                            {data.transmission}
                          </div>
                          <div className="col-6">
                            <span
                              style={{
                                fontSize: "18px",
                              }}
                              className="material-symbols-outlined"
                            >
                              luggage
                            </span>{" "}
                            1 Large Bag
                          </div>
                          <div className="col-6">
                            <span
                              style={{
                                fontSize: "18px",
                              }}
                              className="material-symbols-outlined"
                            >
                              work
                            </span>{" "}
                            1 Small Bag
                          </div>
                        </div>
                        <p className="taxipriceTage">
                          <span>Fee per KM:</span>{" "}
                          <h4>
                            <b>Rs {data.fee}.00</b>
                          </h4>
                        </p>
                        <br />
                        <p>Pickup: {data.pickup}</p>
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

export default Taxis;
