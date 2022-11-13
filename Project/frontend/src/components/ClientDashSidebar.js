import '../styles/nash/ClientDashSidebar.css';
import { Link, useParams } from 'react-router-dom';

function ClientDashSidebar() {
  const { id } = useParams();

  return (
    <div className="ClientDashSidebarMainCont">
        <div className='ClientDSLogoCont'>
            <center><Link to={`/`}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-color.webp?alt=media&token=46432dde-c8e0-43e9-bc91-77b8a98e3f76'} alt='logo' />
                </Link>
            </center>
        </div>
        <Link className='ClientSTabContS' to={`/clientDashboard/${id}`}>
          <span className="material-symbols-outlined">person</span><p>User Profile</p>
        </Link>
        <div className='ClientSTabContL'>
          <span className="material-symbols-outlined">sell</span><p>Bookings</p>
        </div>
        <div className='ClientSTabContSub'>
          <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/flight`}>
            <span className="material-symbols-outlined">flight</span><p>Flights</p>
          </Link>
          <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/hotel`}>
            <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
          </Link>
          <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/destination`}>
            <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
          </Link>
          <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/taxi`}>
            <span className="material-symbols-outlined">local_taxi</span><p>Taxis</p>
          </Link>
          <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/package`}>
            <span className="material-symbols-outlined">package</span><p>Packages</p>
          </Link>
        </div>
        <Link className='ClientSTabContS' to={`/clientDashboard/${id}/feedback`}>
          <span className="material-symbols-outlined">chat</span><p>Feedbacks</p>
        </Link>
        {/* <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/payments`}>
          <span className="material-symbols-outlined">payment</span><p>Payments</p>
        </Link> */}
    </div>
  )
}

export default ClientDashSidebar