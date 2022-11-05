import { Outlet, Link } from 'react-router-dom';
import CeoDashSidebar from '../components/CeoDashSidebar.js'
import '../styles/sahan/SharedLayoutCeoDashboard.css'

function SharedLayoutCeoDashboard() {
  return (
    <div className='SharedLayoutCeoDashMainCont'>
        <CeoDashSidebar />
        <Outlet />
      <Link to={"/"}>
        <button className='HomeBtn'>Home</button>
      </Link>
    </div>
  )
}

export default SharedLayoutCeoDashboard