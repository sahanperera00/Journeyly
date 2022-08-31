import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <h1 className='text-center'>Home</h1>
            <Outlet />
        </div>
    );
}

export default Home;