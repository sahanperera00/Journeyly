import '../styles/leo/HotelResForm.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function HotelResForm({}) {
  const {id} = useParams();

  const[hotel,setHotel]=useState('');

  const getUniqueHotel = async () => {
    await axios.get("http://localhost:8070/hotels/"+id)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getUniqueHotel() }, [id]);

  const [name, setName] = useState('');
  const [hotel_Name, setHotelName] = useState('');
  const [check_in, setCheckin] = useState('');
  const [check_out, setCheckout] = useState('');
  const [suite, setSuite] = useState('');
  const [contactNo, setContactNo]=useState('');
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
              hotelID:hotel._id,
              name,
              hotel_Name,
              check_in,
              check_out,
              suite,
              contactNo
            };
            console.log(newBook);

            await axios.post("http://localhost:8070/hotelRes/create", newBook)
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
              <label className="form-label">Contact Number</label>
              <input type="Number" className="form-control" min="100000000" max="9999999999"onChange={(e) => {setContactNo(e.target.value)}} required/>
            </div>
            <br/>
            {/* <div className="form-group">
              <label className="form-label">Number of Adults</label>
              <input type="Number" className="form-control" onChange={(e) => {setAdults(e.target.value)}} min={0} required/>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Children</label>
              <input type="Number" className="form-control" onChange={(e) => {setChildren(e.target.value)}} min={0} required/>
            </div><br /> */}
            <button type="submit" className="submitbtn">Submit</button>
          </form>
          </div>
           <div className='hotelrestcktcont'>
            <div className='hotelrestckt'>
              <p>Name :{name}</p>
              <p>Hotel Name :{hotel_Name}</p>
              <p>Check In Date :{check_in}</p>
              <p>Check Out Date :{check_out}</p>
              {/* <p>Suite :</p> */}
              <p>Suite :{suite}</p>
              <p>Contact Number :{contactNo}</p>
              {/* <p>Number of Children</p> */}
              <br/>
              <h3>Total :</h3>
              </div>
          </div> 
        </div><br />
    </div>
  )
}

export default HotelResForm