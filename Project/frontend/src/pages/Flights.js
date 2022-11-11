import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/sudul/flight.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarDark from "../components/NavbarDark";

function Flights() {
  const [flights, setFlights] = useState([]);

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
  }, []); //Shows changes of the page

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flightMainContainer">
      <NavbarDark />
      <div className="flightApp">
        <h1 className="flightHeader">Flights</h1>

        <div className="flightContainer">
          <div className="flightSideBar">
            <h1>Search</h1>
            <input
              className="searchSide"
              type="text"
              placeholder="Flight Name or Destination"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="flightBodyContainer">
            {flights
              .filter((data) => {
                if (data.economyClass != null) {
                  if (searchTerm == "") {
                    return data;
                  } else if (
                    data.destinationAirport
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  }
                }
              })
              .map((data) => {
                return (
                  <Link to={"/flightPreview/" + data._id}>
                    <div className="CardContainer1">
                      <div className="ImageContainer">
                        <img
                          className="flightCardImg"
                          alt="pic"
                          src={data.imageI}
                        />
                      </div>
                      <div className="TextContainer">
                        <center>
                          <h2>{data.name} </h2>
                        </center>
                        <center>
                          <h7>{data.airline} </h7>
                        </center>
                        <p className="price">
                          Price: Rs.{data.economyClass} upwards
                        </p>
                        <p className="desc">
                          Leaving Airport: {data.startAirport}
                        </p>
                        <p className="desc">
                          Departure Date: {data.departureDate} (GMT+5:30)
                        </p>
                        <p className="desc">
                          Destination Airport: {data.destinationAirport}
                        </p>
                        <p className="desc">
                          Arrival Date: {data.arrivalDate} (GMT+5:30)
                          <br />
                        </p>
                        <p className="depar">
                          Arrival Time: {data.arrivalTime} (GMT+5:30)
                          <br />
                        </p>
                        <p className="depar">
                          Departure Time: {data.departureTime} (GMT+5:30)
                          <br />
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flights;
