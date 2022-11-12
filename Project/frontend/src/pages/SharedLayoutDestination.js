import { Outlet } from "react-router-dom";
import DesSidebar from "../components/DesSidebar";
import NavbarDark from "../components/NavbarDark";

function SharedLayoutHome() {
  return (
    <div className="bg-light">
      <NavbarDark />
      <DesSidebar />
      <Outlet />
    </div>
  );
}

export default SharedLayoutHome;
