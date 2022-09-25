import ClientDashSidebar from '../components/ClientDashSidebar';
import { Outlet } from 'react-router-dom';

function ClientDashboard() {
  return (
    <div>
        <ClientDashSidebar />
        <Outlet />
    </div>
  )
}

export default ClientDashboard