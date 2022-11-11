import Card from "react-bootstrap/Card";
import axios from "axios";
import NavbarDark from "../components/NavbarDark";
import { useEffect, useState } from "react";
import "../styles/praweena/Packages.css";
import { Link } from "react-router-dom";
import React from "react";

import { useNavigate } from "react-router-dom";

function Packages() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const getPackages = () => {
    axios
      .get("http://localhost:8070/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getPackages();
  }, []); //Shows changes of the page

  return (
    <div className="packageMain">
      <NavbarDark />
      <h1 className="packageHeader">
        Packages
        <h2 className="PackageDiscription">
          Enjoy WonderFul Experience in Sri Lanka
          <br />
          Plan Your Trip With Us{" "}
        </h2>
      </h1>

      <div className="container d-flex flex-wrap" style={{ width: "80%" }}>
        <input
          className="packageSerach"
          type="text"
          placeholder="Search Your Destination here"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        {packages
          .filter((data) => {
            if (data.price != null) {
              if (searchTerm == "") {
                return data;
              } else if (
                data.destination
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
              <Card
                style={{
                  width: "75rem",
                  height: "25rem",
                  margin: "2rem",
                  padding: "0rem",
                }}
                className="PackageCard"
              >
                <Card.Img src={data.image} className="imagePackage" />
                <Card.Body className="PackageBody">
                  <Card.Title className="packageTitle">{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.PackagesId}
                  </Card.Subtitle>
                  <Card.Text>
                    Enter Package Name = {data.name}
                    <br />
                    Travel Destination = {data.destination}
                    <br />
                    Members Count = {data.members}
                    <br />
                    Hotel Name = {data.hotel}
                    <br />
                    Hotel Room Type = {data.roomType}
                    <br />
                    Vehicle ={data.vehicle}
                    <br />
                    Guide = {data.guide}
                    <br /> <br />
                    Price (LK rupees) = {data.price}
                    <button
                      type="button"
                      class="PackageSelect"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Link to={"/PackagePreview/" + data._id}>Select</Link>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Packages;
