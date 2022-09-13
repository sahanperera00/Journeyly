import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function SharedLayoutHome() {
    return (
        <div className='bg-light'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default SharedLayoutHome;