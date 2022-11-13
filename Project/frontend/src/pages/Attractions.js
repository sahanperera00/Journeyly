import "../styles/sahan/Attractions.css";
import Footer from "../components/Footer";

function Attractions() {
  return (
    <div className="attractionsContainer">
      <div className="attImgContainer">
        <div className="attblurContainer" />
        <h1>Attractions</h1>
        <h2>Find and book a great experience</h2>
        <h3>
          Leave no highlight undiscovered as you experience the best things to
          do in Sri Lanka. From top highlights to hidden gems, find the
          unforgettable experiences in Sri Lanka. Discover more of your
          destination and make the most of your trip.
        </h3>
        <img
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "1050px",
            height: "80vh",
          }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2F4907156.png?alt=media&token=a01f1fbb-e33f-406b-9689-4cc78681238a"
          }
          alt="attractions"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Attractions;
