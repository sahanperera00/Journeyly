import '../styles/nash/ClientDashSidebar.css';
import { Link, useParams } from 'react-router-dom';

function ClientDashSidebar() {
  const { id } = useParams();

  return (
    <div className="ClientDashSidebarMainCont">
        <div className='ClientDSLogoCont'>
            <center>
                <img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-color.webp?alt=media&token=a3f56e3b-585b-4a32-b1ab-418c5df3f38c'} alt='logo' />
            </center>
        </div>
        <Link className='ClientSTabContS' to={`/ClientDashboard/${id}`}>
          <span className="material-symbols-outlined">person</span><p>User Profile</p>
        </Link>
        <div className='ClientSTabContL'>
          <span className="material-symbols-outlined">sell</span><p>Bookings</p>
        </div>
        <div className='ClientSTabContSub'>
          <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">flight</span><p>Flights</p>
          </Link>
          <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
          </Link>
          <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
          </Link>
          <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">local_taxi</span><p>Taxis</p>
          </Link>
          <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">package</span><p>Packages</p>
          </Link>
        </div>
        <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/feedback`}>
          <span className="material-symbols-outlined">chat</span><p>Feedbacks</p>
        </Link>
        <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/payments`}>
          <span className="material-symbols-outlined">payment</span><p>Payments</p>
        </Link>
    </div>
  )
}

export default ClientDashSidebar