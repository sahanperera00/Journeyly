import '../styles/sahan/DesResForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function DesResForm({destination}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');


  const navigate = useNavigate();

  return (
    <div id="desresform" className="desresContainer">
        <h1>Ticket Details</h1>
        <div className='desreseinnercontainer'>
          <div className='desresformcont'>
          <form className='desresform' onSubmit={async(e) => {
            e.preventDefault();

            const newTicket = {
              desId: destination._id,
              desName: destination.name,
              firstName,
              lastName,
              email,
              phoneNo,
              date,
              time,
              adults,
              children,
              total: ((destination.adultTicketSellingRate * adults) + (destination.childTicketSellingRate * children))
            };
            console.log(newTicket);

            axios.post("http://localhost:8070/desTicket/create", newTicket)
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
              <label className="form-label">Date</label>
              <input type="date" className="form-control" onChange={(e) => {setDate(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" onChange={(e) => {setTime(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Adults</label>
              <input type="Number" className="form-control" onChange={(e) => {setAdults(e.target.value)}} min={0}/>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Children</label>
              <input type="Number" className="form-control" onChange={(e) => {setChildren(e.target.value)}} min={0}/>
            </div><br />
            <button type="submit" className="submitbtn">Submit</button>
          </form>
          </div>
          <div className='desrestcktcont'>
            <div className='desrestckt'>
              <p>Name : {firstName} {lastName}</p>
              <p>Email : {email}</p>
              <p>Phone Number : {phoneNo}</p>
              <p>Date : {date}</p>
              <p>Time : {time}</p>
              <p>Number of Adults : {adults}</p>
              <p>Number of Children : {children}</p>
              <br/>
              <h3>Total : ${((destination.adultTicketSellingRate * adults) + (destination.childTicketSellingRate * children))}</h3>
              </div>
          </div>
        </div><br />
    </div>
  )
}

export default DesResForm