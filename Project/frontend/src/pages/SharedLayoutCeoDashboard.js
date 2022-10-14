import { Outlet } from 'react-router-dom';
import CeoDashSidebar from '../components/CeoDashSidebar.js'
import '../styles/sahan/SharedLayoutCeoDashboard.css'

function SharedLayoutCeoDashboard() {
  return (
    <div className='SharedLayoutCeoDashMainCont'>
        <CeoDashSidebar />
        <Outlet />
    </div>
  )
}

export default SharedLayoutCeoDashboard