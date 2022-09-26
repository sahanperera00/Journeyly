import '../styles/sudul/flightResForm.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function FlightResForm({}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [passportID, setppID] = useState('');
    const [classType, setClass] = useState('');

    const navigate = useNavigate();

    return (
      <div id="flightresform" className="flightresContainer">
          <h1>Flight Reservation</h1>
          <div className='flightreseinnercontainer'>
            <div className='flightresformcont'>
            <form className='flightresform' onSubmit={async(e) => {
              e.preventDefault();
  
              const newTicket = {
                firstName,
                lastName,
                email,
                phoneNo,
                passportID,
                classType
              };
              console.log(newTicket);
  
              axios.post("http://localhost:8070/flightTicket/create", newTicket)
              .then(() => {
                alert("Ticket added successfully");
                navigate('/attractions');
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
                <input type="text" className="form-control" onChange={(e) => {setPhoneNo(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Passport ID</label>
                <input type="date" className="form-control" onChange={(e) => {setppID(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Class Type</label>
                <input type="radio" className="form-control" onChange={(e) => {setClass(e.target.value)}} required/>
              </div>
              
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div>
            <div className='flightrestcktcont'>
              <div className='flightrestckt'>
                <p>First Name :</p>
                <p>Last Name :</p>
                <p>Email :</p>
                <p>Phone Number :</p>
                <p>Date :</p>
                <p>Time :</p>
                <p>Number of Adults :</p>
                <p>Number of Children</p>
                <br/>
                <h3>Total :</h3>
                </div>
            </div>
          </div><br />
      </div>
    )
  }
  
  export default FlightResForm