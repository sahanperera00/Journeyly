
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function HotelResForm({destination}) {
  const [name, setName] = useState('');
  const [hotel_Name, setHotelName] = useState('');
  const [check_in, setCheckin] = useState('');
  const [check_out, setCheckout] = useState('');
  const [suite, setSuite] = useState('');
  const [customizations, setCustomizations] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');


  const navigate = useNavigate();
function checkDate(){
    var indate= document.getElementById();
    var outdate = document.getElementById();
    if(indate.getDate()<=outdate.getDate()){
        /*Allow transaction*/ 
    }else{
        /*Dont allow */
    }
}
  return (
    <div id="desresform" className="desresContainer">
        <h1>Ticket Details</h1>
        <div className='desreseinnercontainer'>
          <div className='desresformcont'>
          <form className='desresform' onSubmit={async(e) => {
            e.preventDefault();

            const newBook = {
              desId: destination._id,
              name,
              hotel_Name,
              check_in,
              check_out,
              suite,
              customizations,
              adults,
              children
            };
            console.log(newBook);

            axios.post("http://localhost:8070/hotelRes/create", newBook)
            .then(() => {
              alert("Hotel Booked Successfully");
              navigate('/hotels');
            }).catch((err) => {
              alert("Error ");
              console.log(err);
            });
          }}>
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Name</label>
              <input type="text" className="form-control" onChange={(e) => {setHotelName(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Check In </label>
              <input type="date" className="form-control" onChange={(e) => {setCheckin(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Check Out</label>
              <input type="date" className="form-control" onChange={(e) => {setCheckout(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Suite</label>
              <input type="text" className="form-control" onChange={(e) => {setSuite(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">customizations</label>
              <input type="text" className="form-control" onChange={(e) => {setCustomizations(e.target.value)}} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Adults</label>
              <input type="Number" className="form-control" onChange={(e) => {setAdults(e.target.value)}} min={0} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Children</label>
              <input type="Number" className="form-control" onChange={(e) => {setChildren(e.target.value)}} min={0} required/>
            </div><br />
            <button type="submit" className="submitbtn">Submit</button>
          </form>
          </div>
          <div className='desrestcktcont'>
            <div className='desrestckt'>
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

export default HotelResForm