import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles/sahan/DesPreview.css";
import DesResForm from "./DesResForm";
import Footer from "../components/Footer";

function alertt() {
  alert("Please login to buy a ticket");
}

function DesPreview() {
  const [attraction, setAttraction] = useState([]);
  const [value, setValue] = useState("none");

  const { id } = useParams();
  const navigate = useNavigate();

  const getAttraction = async () => {
    await axios
      .get("http://localhost:8070/destination/" + id)
      .then((res) => {
        setAttraction(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  function checkLogin() {
    console.log(localStorage.getItem("ID"));
    if (sessionStorage.getItem("ID") != null) {
      setValue("");
    } else {
      alertt();
    }
  }

  function ticket() {
    return (
      <div className="desResFormContainer" style={{ display: value }}>
        <DesResForm destination={attraction} />
      </div>
    );
  }

  useEffect(() => {
    getAttraction();
  }, [id]);

  return (
    <>
      <div
        className="desPreviewContainer"
        style={{ backgroundImage: `url(${attraction.images})` }}
      >
        <div className="desPreviewBlueDiv" />
        <div className="despreviewTextContainer">
          <h1 className="descpreviewh1">
            {attraction.name}
            <br />
          </h1>
          <a
            href={attraction.desLink}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span class="material-symbols-outlined">location_on</span>
            {""}
            <span style={{ fontSize: "18px" }}>{attraction.location}</span>
          </a>
          <h2 className="descpreviewh2">{attraction.shortDesc}</h2>
          <p className="descpreviewp">{attraction.longDesc}</p>
          <br />
          <a
            href="#desresform"
            className="reserveBtn"
            onClick={(e) => checkLogin()}
          >
            Buy a Ticket
          </a>
        </div>
      </div>
      {ticket()}
      <Footer />
    </>
  );
}

export default DesPreview;
