import { Outlet } from 'react-router-dom';
import DesSidebar from '../components/DesSidebar';

function SharedLayoutHome() {
    return (
        <div className='bg-light'>
            <DesSidebar />
            <Outlet />
        </div>
    );
}

export default SharedLayoutHome;