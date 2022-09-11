import '../styles/sahan/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../images/Journeyly&Slogan-color.png';

function Home() {
    return (
        <div className='homeCont'>
            <Carousel className='carouselCont' fade>

                <Carousel.Item className='heroCont1' interval={4000}>
                    <Carousel.Caption className='heroText'>
                        <img src={logo} alt='heroimg' />
                        <h1>Travel with us</h1>
                        <p>Travel with us to the most beautiful places in Sri Lanka</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='heroCont2' interval={4000}>
                    <Carousel.Caption className='heroText'>
                        <img src={logo} alt='heroimg' />
                        <h1>Travel with us</h1>
                        <p>Travel with us to the most beautiful places in Sri Lanka</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='heroCont3' interval={4000}>
                    <Carousel.Caption className='heroText'>
                        <img src={logo} alt='heroimg' />
                        <h1>Travel with us</h1>
                        <p>Travel with us to the most beautiful places in Sri Lanka</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
}

export default Home;