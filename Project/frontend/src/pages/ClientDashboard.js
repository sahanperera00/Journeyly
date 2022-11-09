import ClientDashSidebar from '../components/ClientDashSidebar';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../styles/nash/ClientDashboard.css';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ClientDashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) return <p className='text-center mt-5'>Loading ...</p>

  if (!user) {
    navigate('/');
  }
  return (
    <div className='CDashMainCont'>
      <ClientDashSidebar />
      <span className='logoutBtn' onClick={() => signOut(auth)&sessionStorage.removeItem("ID")}>Logout</span>

      <Outlet />
    </div>
  )
}

export default ClientDashboard