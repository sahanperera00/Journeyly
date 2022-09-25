import ClientDashSidebar from '../components/ClientDashSidebar';
import { Outlet } from 'react-router-dom';
import '../styles/nash/ClientDashboard.css';

function ClientDashboard() {
  return (
    <div>
        <ClientDashSidebar />
        <Outlet />
    </div>
  )
}

export default ClientDashboard