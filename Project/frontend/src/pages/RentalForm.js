import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Madusha/Rental.css';


function RentalForm({rental}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [startDes, setStartDes] = useState('');
  const [endDes, setEndDes] = useState('');


  const navigate = useNavigate();

  return (
    <div id="rentalform" className="rentalContainer">
        <h1>Rental Details</h1>
        <div className='rentaleinnercontainer'>
          <div className='rentalformcont'>
          <form className='rentalform' onSubmit={async(e) => {
            e.preventDefault();

            const newRental = {
              vehicleId: rental._id,
              firstName,
              lastName,
              email,
              phoneNo,
              date,
              time,
              startDes,
              endDes,
              
            };
            console.log(newRental);

            axios.post("http://localhost:8070/rental/create", newRental)
            .then(() => {
              alert("Vehicle Rented successfully");
              navigate('/allVehicles');
            }).catch((err) => {
              alert("Error making the rent");
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
              <label className="form-label">Date</label>
              <input type="date" className="form-control" onChange={(e) => {setDate(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" onChange={(e) => {setTime(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Starting Destination</label>
              <input type="text" className="form-control" onChange={(e) => {setStartDes(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Ending Destination</label>
              <input type="text" className="form-control" onChange={(e) => {setEndDes(e.target.value)}} required/>
            </div><br />
            <button type="submit" className="submitbtn">Submit</button>
          </form>
          </div>
          <div className='rentcont'>
            <div className='rent'>
              <p>First Name :</p>
              <p>Last Name :</p>
              <p>Email :</p>
              <p>Phone Number :</p>
              <p>Date :</p>
              <p>Time :</p>
              <p>Starting Destination :</p>
              <p>Ending Destination</p>
              <br/>
              
              </div>
          </div>
        </div><br />
    </div>
  )
}

export default RentalForm;