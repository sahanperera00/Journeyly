import '../styles/nash/ClientDashSidebar.css';
import { Link } from 'react-router-dom';

function ClientDashSidebar() {
  // const { id } = useParams();

  const id = '001';

  return (
    <div className="CDashSidebarContainer">
        <div className='CDSLogoCont'>
            <center>
                <img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-color.webp?alt=media&token=a3f56e3b-585b-4a32-b1ab-418c5df3f38c'} alt='logo' />
            </center>
        </div>
        <Link className='CDSTabCont' to={'/clientDashboard/:id'}>
          <span className="material-symbols-outlined">person</span><p>User Profile</p>
        </Link>
        <Link className='CDSTabCont' to={'/clientDashboard/:id/bookings'}>
          <span className="material-symbols-outlined">sell</span><p>Bookings</p>
        </Link>
        <Link className='CDSTabCont' to={'/clientDashboard/:id/feedback'}>
          <span className="material-symbols-outlined">chat</span><p>Feedbacks</p>
        </Link>
        <Link className='CDSTabCont' to={'/clientDashboard/:id/payments'}>
          <span className="material-symbols-outlined">payment</span><p>Payments</p>
        </Link>
    </div>
  )
}

export default ClientDashSidebar