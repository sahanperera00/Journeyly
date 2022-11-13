import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarDark from "../components/NavbarDark";
import Button from "react-bootstrap/esm/Button";

function SharedLayoutHome() {
  return (
    <div className="bg-light">
      <Outlet />
      <Link to={"/FeedbackForm/"}>
        <button className="feedrotate" style={{}}>
          <span
            class="material-symbols-outlined"
            style={{ padding: "10px", color: "white" }}
          >
            comment
          </span>
        </button>
      </Link>
    </div>
  );
}

export default SharedLayoutHome;
