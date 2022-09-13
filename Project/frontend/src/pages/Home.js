import '../styles/sahan/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import logo from '../images/Journeyly&Slogan-W.png';
import Tilt from '../components/Tilt';
import { Link } from "react-router-dom";


function Home() {
    const options = {
        // scale: 1.05,
        reverse: true,
        speed: 1000,
        max: 10,
        glare: false,
        "max-glare": 0.1,
    };

    return (
        <div className='homeCont'>
            <Carousel className='carouselCont' fade>
                <Carousel.Item className='heroCont1' interval={2500}>
                    <Tilt options={options} className='heroText1'>
                        <Carousel.Caption className='carousalCap'>
                            <img src={logo} alt='heroimg' />
                            <h1>Travel with us</h1>
                            <p>Travel with us to the most beautiful places in Sri Lanka</p>
                            <Link to={"/registration"}>
                                <Button variant="outline-light">Let's get started</Button >
                            </Link>
                        </Carousel.Caption>
                    </Tilt>
                </Carousel.Item>

                <Carousel.Item className='heroCont2' interval={2500}>
                <Tilt options={options} className='heroText1'>
                    <Carousel.Caption className='carousalCap'>
                        <img src={logo} alt='heroimg' />
                        <h1>Travel with us</h1>
                        <p>Travel with us to the most beautiful places in Sri Lanka</p>
                        <Link to={"/registration"}>
                            <Button variant="outline-light">Let's get started</Button >
                        </Link>
                    </Carousel.Caption>
                </Tilt>
                </Carousel.Item>

                <Carousel.Item className='heroCont3' interval={2500}>
                <Tilt options={options} className='heroText1'>
                    <Carousel.Caption className='carousalCap'>
                        <img src={logo} alt='heroimg' />
                        <h1>Travel with us</h1>
                        <p>Travel with us to the most beautiful places in Sri Lanka</p>
                        <Link to={"/registration"}>
                            <Button variant="outline-light">Let's get started</Button >
                        </Link>
                    </Carousel.Caption>
                </Tilt>
                </Carousel.Item>

            </Carousel>
            <script type="text/javascript" src="vanilla-tilt.js"></script>
        </div>
    );
}

export default Home;