import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import "../styles/Madusha/Rental.css";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function PackageReservationForm({}) {
  
  const {id} = useParams();

  const[packages,setPackages]= useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
  


  const navigate = useNavigate();
  const getPackages=()=>{
    axios.get("http://localhost:8070/packages/"+id).then((res)=>{
            
      setPackages(res.data);
            
          })
          .catch((err) => {
              alert(err.message);
          });
      }
      


      useEffect(()=> getPackages(),[]);

  return (
    <div id="rentalform" className="rentalContainer">
      <NavbarDark />

      <h1>Package Reservation Booking Details</h1>
      <h2 className='#'>Package Name - {packages.name}</h2>
        <h2 className='#'>Price of the Package: {packages.price}<br/></h2>
      <div className="rentaleinnercontainer">
        <div className="rentalformcont">
          <form
            className="rentalform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newBook = {
                packageReservationId: packages._id,
                name1: packages.name,
                price:packages.price,
                name,
                date,
                email,
                phoneNo,
                userID:sessionStorage.getItem("ID"),
  
             
              };
              console.log(newBook);

              await axios.post("http://localhost:8070/packageReservation/create", newBook)
              .then(() => {
                alert("Package Booked Successfully");
               
              }).catch((err) => {
                alert("Error ");
                console.log(err);
              });
            }}>

        <div className="form-group">
              
              </div>

              <div className="form-group">
                <label className="Formtest">Full Name</label>
                <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} required/>
              </div>
              
              <div className="form-group">
                <label className="Formtest">Reserve Date </label>
                <input type="date" className="form-control" onChange={(e) => {setDate(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="Formtest">Email</label>
                <input type="email" className="form-control" onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              
  <div className="form-group">
                <label className="Formtest">phoneNo</label>
                <input type="Number" className="form-control"  min="100000000" max="9999999999" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
          <br />

            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
        <div className="rentcont">
          <div className="rent">
           
            <p> Price :{packages.price}</p>
            <p>Name :{name}</p>
              <p>Reserve Date :{date}</p>
              <p>Email :{email}</p>
              <p>Contact Number :{phoneNo}</p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default PackageReservationForm;

