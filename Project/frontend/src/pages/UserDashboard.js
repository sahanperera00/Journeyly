
import { Outlet } from 'react-router-dom'
import UserDashboardSidebar from './UserDashboardSidebar'
import '../styles/nash/UserDashboard.css'
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div className='userdashboardcontainer'>

        <UserDashboardSidebar/>
        <Outlet/>
       
        <Link to={"/"}>
                <button className='btnlogout'>Logout</button>
        </Link>
        
    </div>
  )
}

export default UserDashboard