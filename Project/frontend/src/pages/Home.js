import '../styles/sahan/Home.css';
import logo from '../images/Journeyly&Slogan-color.png';

function Home() {
    return (
        <div className='homeCont'>
            <div className='heroCont'>
                <div className='heroText'>
                    <img src={logo} alt='heroimg' />
                    <h1>Travel with us</h1>
                    <p>Travel with us to the most beautiful places in Sri Lanka</p>
                </div>
            </div>
        </div>
    );
}

export default Home;