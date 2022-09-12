import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

function SharedLayoutHome() {
    return (
        <div className='bg-light'>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default SharedLayoutHome;