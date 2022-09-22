
import { Outlet } from 'react-router-dom'
import UserDashboardSidebar from './UserDashboardSidebar'
// import '../styles/nash/UserDashboard.css'

function UserDashboard() {
  return (
    <div className='userdashboardcontainer'>

        <UserDashboardSidebar/>
        <Outlet/>
        
    </div>
  )
}

export default UserDashboard