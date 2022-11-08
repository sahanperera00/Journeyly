import '../styles/sudul/flightResForm.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function checkAndChange(e){
  if (e.target.className === 'seat' && localStorage.getItem("check")=="0") {
    e.target.className = 'seat selected';
    localStorage.setItem("check","1");
    console.log(e.target.value);
  }
  else if (e.target.className === 'seat selected') {
    e.target.className = 'seat';
    localStorage.setItem("check","0");
    console.log(localStorage.getItem("check"));
  }
}


function FlightResForm() {
  
  
  const [flight, setFlight] = useState([]);

  const {id} = useParams();

  var seat = 0;


  const checkFlight = () => {
    const container = document.querySelector('.containers');
    localStorage.setItem("check","0");
    container.addEventListener('click', (e) => {
      seat++;
      checkAndChange(e);
      console.log(seat);
    
    });
  }
  

  

  const getUniqueFlight = async () => {
    await axios.get("http://localhost:8070/flights/"+id)
      .then((res) => {
        setFlight(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getUniqueFlight() }, [id]);
  useEffect(() => { checkFlight() }, [seat]);
    function radio(value){
      if(value == "BusinessClass"){
        setPrice(flight.businessClass)
        setClass("Business Class")
      }
      else{
        setPrice(flight.economyClass)
        setClass("Economy Class")
      }

    }
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [passportID, setppID] = useState('');
    const [classType, setClass] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();


    return (
      <div id="flightresform" className="flightresContainer">
          <h1>Flight Reservation</h1>
          <div className='flightreseinnercontainer'>
            <div className='flightresformcont'>
            <form className='flightresform' onSubmit={async(e) => {
              e.preventDefault();

              const newTicket = {
                flightID: flight._id,
                flightName: flight.name,
                airline:flight.airline,
                startAirport:flight.startAirport,
                departureDate:flight.departureDate,
                departureTime: flight.departureTime,
                destinationAirport: flight.destinationAirport,
                userID:localStorage.getItem("ID"),
                firstName,
                lastName,
                email,
                phoneNo,
                passportID,
                classType,
                economyClass:flight.economyClass,
                businessClass:flight.businessClass,
                price                
              }
              
              console.log(newTicket);

              axios.post("http://localhost:8070/flightTicket/create", newTicket)
              .then(() => {
                alert("Ticket added successfully");
                navigate('/flights');
              }).catch((err) => {
                alert("Error adding ticket");
                console.log(err);
              });
              
  
              
            }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" onChange={(e) => {setFirstName(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" onChange={(e) => {setLastName(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" min="0110000000" max="0799999999" onChange={(e) => {setPhoneNo(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Passport ID</label>
                <input type="text" className="form-control" onChange={(e) => {setppID(e.target.value)}} required/>
              </div>
              <div className="form-group">
              <label className="form-label">Class Type</label>
              {/* <select class="form-select" aria-label="Default select example" onChange={(e) => {setClass(e.target.value)}} required>
               <option value="Economy Class">Economy Class</option>
               <option value="Business Class">Business Class</option>
              </select> */}<br/>
              <input type="radio" name="cls" value="EconomyClass" onChange={(e) => {radio(e.target.value)}} />Economy Class<br/>
              <input type="radio" name="cls" value="BusinessClass" onChange={(e) => {radio(e.target.value)}} />Business Class
              </div>  
              <br/>
              <ul class="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>

      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>

      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div className="containers" >
      <div className="screen"></div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
      </div>
    </div>

              <button type="submit" className="submitbtn1">Submit</button>
            </form>
            </div>
            <div className='flightrestcktcont'>
              <div className='flightrestckt'>
              <center><h3>{flight.name}</h3>
              <h5>{flight.airline}</h5></center><br/>
                <p>Starting Airport : {flight.startAirport}</p>
                <p>Departure Date : {flight.departureDate} (GMT+5.30)</p>
                <p>Departure Time : {flight.departureTime} (GMT+5.30)</p>
                <p>Destination Airport : {flight.destinationAirport}</p>
                <p>Name : {firstName} {lastName}</p>
                <p>Email Address : {email}</p>
                <p>Phone Number : {phoneNo}</p>
                <p>Passport ID : {passportID}</p>
                <p>Class : {classType}</p>               
                <br/>
                <h3>Total : {price}</h3>
                </div>
            </div>
          </div><br />
      </div>
    )
  }
  
  
  export default FlightResForm