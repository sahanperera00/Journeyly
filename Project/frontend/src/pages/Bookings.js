import '../styles/sahan/Bookings.css';
import { Outlet, Link, useParams } from 'react-router-dom';

function Bookings() {
  const { id } = useParams();

  return (
    <div className='BookingsContainer'>
        <div className='topicCont'>
            <h1>Bookings</h1>
        </div>
        <div className='bookingsBodyCont'>
            {/* <div className='bookingsTabCont'>
              <ul className='bookingsList'>
                <li className='bookingsListItem'>Flights</li>
                <li className='bookingsListItem'>Hotels</li>
                <Link className='bookingsListItem' to={`/ClientDashboard/${id}/bookings/destination`}>
                  <li>Attractions</li>
                </Link>
                <li className='bookingsListItem'>Taxis</li>
                <li className='bookingsListItem'>Packages</li>
              </ul>
            </div> */}
            <div className='bookingsTableCont'>
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Bookings