import ClientDashSidebar from '../components/ClientDashSidebar';
import { Outlet, Link } from 'react-router-dom';
import '../styles/nash/ClientDashboard.css';

function ClientDashboard() {
  return (
    <div className='CDashMainCont'>
        <ClientDashSidebar />
        <Link className='logoutBtn' to={'/'}>Logout</Link>

        <Outlet />
    </div>
  )
}

export default ClientDashboard