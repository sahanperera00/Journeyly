import '../styles/leo/HotelResForm.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function PackageReservationForm({}) {
  
  const {id} = useParams();

  const [name, setName] = useState('');
 
  const [check_in, setCheckin] = useState('');
  const [check_out, setCheckout] = useState('');
  
  const [phoneNo, setphoneNo]=useState('');
  // const [customizations, setCustomizations] = useState('');
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
  return (
    <div id="hotelresform" className="hotelresContainer">
        <h1>Booking Details</h1>
        <div className='hotelreseinnercontainer'>
          <div className='hotelresformcont'>
          <form className='hotelresform' onSubmit={async(e) => {
            e.preventDefault();

            const newBook = {
              name,
              
              check_in,
              check_out,
              
              phoneNo
            };
            console.log(newBook);

            await axios.post("http://localhost:8070/packageReservation/create", newBook)
            .then(() => {
              alert("Hotel Booked Successfully");
              // navigate('/hotels');
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
                <label className="form-label">Check In </label>
                <input type="date" className="form-control" onChange={(e) => {setCheckin(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Check Out</label>
                <input type="date" className="form-control" onChange={(e) => {setCheckout(e.target.value)}} required/>
              </div>
              
  <div className="form-group">
                <label className="form-label">phoneNo</label>
                <input type="text" className="form-control" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
          <br />
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div>
            <div className='hotelrestcktcont'>
            <div className='lll'>
            <p>Name :{name}</p>
              <p>Check In Date :{check_in}</p>
              <p>Check Out Date :{check_out}</p>
              <p>Contact Number :{phoneNo}</p>
              {/* <p>Number of Children</p> */}


            </div>
            </div>
            </div>
            </div>
        


    )

    

    
        }  export default PackageReservationForm
