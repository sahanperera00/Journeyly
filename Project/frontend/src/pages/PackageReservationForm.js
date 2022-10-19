import '../styles/praweena/PackageForm.css'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PackageReservationForm({}) {
  
  const {id} = useParams();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
  
  const [price,setPrice]=useState('');


  const navigate = useNavigate();
  const getPackages=()=>{
    axios.get("http://localhost:8070/packages/"+id).then((res)=>{
            
            setPrice(res.data.price);
          })
          .catch((err) => {
              alert(err.message);
          });
      }
      useEffect(()=> getPackages(),[]);

  return (
    <div className='pakgeMain'>
        <h1 className="packageresMainContainer">Package Booking Details</h1>
        <p className='pkgprice'>Price of the Package: {price}<br/></p>
        <div className='IneerFormat'>
          <div className='hotelresformcont'>
          <form className='hotelresform' onSubmit={async(e) => {
            e.preventDefault();

            const newBook = {
              name,
              date,
              email,
              phoneNo,
           
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
                <label className="form-label">Reserve Date </label>
                <input type="date" className="form-control" onChange={(e) => {setDate(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              
  <div className="form-group">
                <label className="form-label">phoneNo</label>
                <input type="text" className="form-control" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
          <br />
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div>
            <div className='Packgecontainer'>
           
            <p>Name :{name}</p>
              <p>Reserve Date :{date}</p>
              <p>Email :{phoneNo}</p>
              <p>Contact Number :{phoneNo}</p>
              <br/>
            

            </div>
            
            </div>
            </div>
        


    )

    

    
        }  export default PackageReservationForm
