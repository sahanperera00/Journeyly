import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarDark from "../components/NavbarDark";

function SharedLayoutHome() {
  return (
    <div className="bg-light">
      <Outlet />
    </div>
  );
}

export default SharedLayoutHome;
