import '../styles/sahan/CeoDashboard.css'
import { Link } from 'react-router-dom';

function CeoDashboard() {
  return (
    <div className="CeoDashMainCont">
        <h1>Dashboard</h1>
        <div className='CeoDasInnerCont'>
          <div className='CeoInConR1'>
            <div className='CeoInConR1card'>
              <p>No of Airlines</p>
            </div>
            <div className='CeoInConR1card'>
              <p>No of Hotels</p>
            </div>
            <div className='CeoInConR1card'>
              <p>No of Destinations</p>
            </div>
            <div className='CeoInConR1card'>
              <p>No of Taxi Companies</p>
            </div>
          </div>
          <div className='CeoInConR2'>
            <div className='CeoInConR2card'>
              <p>No of Clients</p>
            </div>
            <div className='CeoInConR2card'>
              <p>No of Packeges</p>
            </div>
          </div>
        </div>
            <Link to={"/"}>
            <button className='FeedbackBtn'>Home</button>
            </Link>
    </div>
  )
}

export default CeoDashboard