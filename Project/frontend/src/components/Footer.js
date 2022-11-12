import "../styles/sahan/Footer.css";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";

function Footer() {
  return (
    <div className="footerCont">
      <img
        style={{ width: "170px", height: "auto" }}
        src={
          "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-W.webp?alt=media&token=c779642d-f02b-4d1e-90e1-bd70c77bdfd3"
        }
        alt="heroimg"
      />
      © 2022 Journeyly LP.
      <p style={{ fontSize: "12px", marginTop: "4px" }}>
        Journeyly is part of Journeyly Holdings Inc., the world leader in online
        travel & related services.
      </p>
      {/* <div className="blurContainer" /> */}
    </div>
  );
}

export default Footer;
