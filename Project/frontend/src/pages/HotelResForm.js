import "../styles/leo/HotelResForm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function HotelResForm({}) {
  const { id } = useParams();

  const [hotel, setHotel] = useState("");

  const getUniqueHotel = async () => {
    await axios
      .get("http://localhost:8070/hotels/" + id)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getUniqueHotel();
  }, [id]);

  const [name, setName] = useState("");
  const [hotel_Name, setHotelName] = useState("");
  const [check_in, setCheckin] = useState("");
  const [check_out, setCheckout] = useState("");
  const [suite, setSuite] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [customizations, setCustomizations] = useState("");
  // const [adults, setAdults] = useState('');
  // const [children, setChildren] = useState('');

  const navigate = useNavigate();
  // function checkDate(){
  //     var indate= document.getElementById();
  //     var outdate = document.getElementById();
  //     if(indate.getDate()<=outdate.getDate()){
  //         /*Allow transaction*/
  //     }else{
  //         /*Dont allow */
  //     }
  // }

  function radio(data1) {
    setCustomizations(data1);
  }

  function getDifference(day1, day2) {
    const dateOne = new Date(day1);
    const dateTwo = new Date(day2);
    const time = Math.abs(dateOne - dateTwo);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    console.log(dateOne);

    if (dateOne != "Invalid Date" && dateTwo != "Invalid Date") {
      return days;
    } else {
      return 0;
    }
  }
  return (
    <div id="hotelresform" className="hotelresContainer">
      <NavbarDark />
      <br />
      <h1>Booking Details</h1>
      <div className="hotelreseinnercontainer">
        <div className="hotelresformcont">
          <form
            className="hotelresform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newBook = {
                hotelID: hotel._id,
                sellingpPrice: hotel.sellingPrice,
                name,
                hotel_Name: hotel.name,
                check_in,
                check_out,
                suite,
                contactNo,
                customizations,
                total: getDifference(check_in, check_out) * hotel.sellingPrice,
                userID: sessionStorage.getItem("ID"),
              };
              console.log(newBook);

              await axios
                .post("http://localhost:8070/hotelRes/create", newBook)
                .then(() => {
                  alert("Hotel Booked Successfully");
                  // navigate('/hotels');
                })
                .catch((err) => {
                  alert("Error ");
                  console.log(err);
                });
            }}
          >
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            {/* <div className="form-group">
              <label className="form-label">Hotel Name</label>
              <input type="text" className="form-control" onChange={(e) => {setHotelName(e.target.value)}} required/>
            </div> */}
            <div className="form-group">
              <label className="form-label">Check In </label>
              <input
                type="date"
                className="form-control"
                id="arrdate"
                onChange={(e) => {
                  setCheckin(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Check Out</label>
              <input
                type="date"
                className="form-control"
                id="depdate"
                onChange={(e) => {
                  setCheckout(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Suite</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Prefered Suite"
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input
                type="Number"
                className="form-control"
                placeholder="Enter Contact Number"
                min="100000000"
                max="9999999999"
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}
                required
              />
            </div>
            <br />
            <hr />
            <h4>Customizations:</h4>
            <br />
            <div>
              <p>
                Access to the dishes available in the Buffet
                <br />
                (No Additional Fee)
                <br />
                <input
                  type="radio"
                  name="Cuzzi"
                  value="Normal"
                  onChange={(e) => {
                    radio(e.target.value);
                  }}
                />{" "}
                Normal Package
              </p>
              <p>
                Upto 2 pre-Ordered meals served for prefered meals
                <br />
                (Additional Fee to be paid at check-in)
                <br />
                <input
                  type="radio"
                  name="Cuzzi"
                  value="Gold"
                  onChange={(e) => {
                    radio(e.target.value);
                  }}
                />{" "}
                Gold Package
              </p>
              <p>
                Upto 5 pre-Ordered meals with desired drinks
                <br />
                (Additional Fee to be paid at check-in)
                <br />
                <input
                  type="radio"
                  name="Cuzzi"
                  value="Platinum"
                  onChange={(e) => {
                    radio(e.target.value);
                  }}
                />{" "}
                Platinum Package
              </p>
            </div>
            {/* <div className="form-group">
              <label className="form-label">Number of Adults</label>
              <input type="Number" className="form-control" onChange={(e) => {setAdults(e.target.value)}} min={0} required/>
            </div> */}
            <br />
            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
        <div className="hotelrestcktcont">
          <div className="hotelrestckt">
            <p>
              Name :<b>{name}</b>
            </p>
            <p>
              Hotel Name :<b>{hotel.name}</b>
            </p>
            <p>
              Check In Date :<b>{check_in}</b>
            </p>
            <p>
              Check Out Date :<b>{check_out}</b>
            </p>
            {/* <p>Suite :</p> */}
            <p>
              Suite :<b>{suite}</b>
            </p>
            <p>
              Contact Number :<b>{contactNo}</b>
            </p>
            <p>
              Customizations: <b>{customizations}</b>
            </p>
            {/* <p>Number of Children</p> */}
            <p>
              Number of days at the hotel:{" "}
              <b>{getDifference(check_in, check_out)}</b> days
            </p>
            <br />
            <h3>
              <b>
                Total : Rs{" "}
                {getDifference(check_in, check_out) * hotel.sellingPrice}.00
              </b>
            </h3>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default HotelResForm;
