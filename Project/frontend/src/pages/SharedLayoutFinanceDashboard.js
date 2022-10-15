import { Link, Outlet } from "react-router-dom";
import FinanceDashSidebar from "../components/FinanceDashSidebar";
import '../styles/sahan/SharedLayoutFinanceDashboard.css'

function SharedLayoutFinanceDashboard() {
  return (
    <div className='SharedLayoutFinanceDashMainCont'>
        <FinanceDashSidebar />
        <Outlet />
      <Link to={"/"}>
        <button className='HomeBtn'>Home</button>
      </Link>
    </div>
  )
}

export default SharedLayoutFinanceDashboard