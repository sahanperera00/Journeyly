import "../styles/sahan/Home.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Tilt from "../components/Tilt";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import axios from "axios";
import { useState } from "react";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";

function Home() {
  const [id, setId] = useState("");
  const options = {
    reverse: true,
    speed: 1000,
    max: 10,
    glare: false,
    "max-glare": 0.1,
  };

  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-5">Loading ...</p>;

  if (user) {
    axios
      .get(`http://localhost:8070/client/getClientInfo/${user?.email}`)
      .then((client) => {
        setId(client.data._id);
      })
      .catch((err) => {
        console.log(err);
        signOut(auth);
      });
  }

  return (
    <div className="homeCont">
      <Navbar />
      <Carousel className="carouselCont" fade>
        <Carousel.Item className="heroCont1" interval={2500}>
          <Tilt options={options} className="heroText1">
            <Carousel.Caption className="carousalCap">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-W.webp?alt=media&token=a652ffa4-96d9-4f20-987f-c0d8019a5283"
                }
                alt="heroimg"
              />
              <h1>Travel with us</h1>
              <p>Travel with us to the most beautiful places in Sri Lanka</p>
              <Link to="/registration">
                <Button className="whitebtn">Let's get started</Button>
              </Link>
            </Carousel.Caption>
          </Tilt>
        </Carousel.Item>

        <Carousel.Item className="heroCont2" interval={2500}>
          <Tilt options={options} className="heroText1">
            <Carousel.Caption className="carousalCap">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-W.webp?alt=media&token=a652ffa4-96d9-4f20-987f-c0d8019a5283"
                }
                alt="heroimg"
              />
              <h1>Travel with us</h1>
              <p>Travel with us to the most beautiful places in Sri Lanka</p>
              <Link to="/registration">
                <Button className="whitebtn">Let's get started</Button>
              </Link>
            </Carousel.Caption>
          </Tilt>
        </Carousel.Item>

        <Carousel.Item className="heroCont3" interval={2500}>
          <Tilt options={options} className="heroText1">
            <Carousel.Caption className="carousalCap">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-W.webp?alt=media&token=a652ffa4-96d9-4f20-987f-c0d8019a5283"
                }
                alt="heroimg"
              />
              <h1>Travel with us</h1>
              <p>Travel with us to the most beautiful places in Sri Lanka</p>
              <Link to="/registration">
                <Button className="whitebtn">Let's get started</Button>
              </Link>
            </Carousel.Caption>
          </Tilt>
        </Carousel.Item>
      </Carousel>
      <script type="text/javascript" src="vanilla-tilt.js"></script>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
