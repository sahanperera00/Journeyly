import '../styles/sahan/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import logo from '../images/Journeyly&Slogan-W.png';
import Tilt from '../components/Tilt';

function Home() {
    const options = {
        // scale: 1.05,
        speed: 1000,
        max: 10,
        glare: true,
        "max-glare": 0.1,
    };

    return (
        <div className='homeCont'>
            <Carousel className='carouselCont' fade>

                <Carousel.Item className='heroCont1' interval={4000}>
                    <Tilt options={options} className='heroText1'>
                        <Carousel.Caption>
                            <img src={logo} alt='heroimg' />
                            <h1>Travel with us</h1>
                            <p>Travel with us to the most beautiful places in Sri Lanka</p>
                            <Button variant="outline-light">Let's get started</Button >
                        </Carousel.Caption>
                    </Tilt>
                </Carousel.Item>

                {/* <Carousel.Item className='heroCont2' interval={4000}>
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
                </Carousel.Item> */}

            </Carousel>
            <script type="text/javascript" src="vanilla-tilt.js"></script>
        </div>
    );
}

export default Home;