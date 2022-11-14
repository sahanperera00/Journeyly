import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Madusha/TaxiPreview.css';
import { Link } from 'react-router-dom';
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function alertt(){
  alert("Please login to rent a vehicle");
}

function RentalPreview() {

  const [vehicleType, setVType]=useState('');
  const [type, setType]=useState('');
  const [driverName, setDriverName]=useState('');
  const [fee, setFee]=useState('');
  const [seats, setSeats]=useState('');
  const [transmission, setTransmission]=useState('');
  const [image, setImage]=useState('');

  function checkLogin(){
    if(sessionStorage.getItem("ID")==null){
        return(
        <Link to={'/registration'} onClick={alertt} >
        <div>
            <button className='rentbtn'>Rent this vehicle</button>
        </div>
        </Link>)   
    }else{
        return(<Link to={'/rentalForm/'+id}>
        <div>
            <button className='rentbtn' >Rent this Vehicle</button>
        </div>
        </Link>)   
    }
 }


  const {id} = useParams();

  const getVehicle = async () => {
    await axios.get("http://localhost:8070/vehicles/"+id)
      .then((res) => {
        setVType(res.data.vehicleType);
        setType(res.data.type);
        setDriverName(res.data.driverName);
        setFee(res.data.fee);
        setSeats(res.data.seats);
        setTransmission(res.data.transmission);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicle() }, [id]);

  return (
    <div className='taxipreviewContainer'>
      <NavbarDark />
      <div className="taxiApp">
        <div className='taxiImgContainer'>
          <img className='taxiImg' alt='pic' src={image}/>
        </div>
      <div className='taxiTextContainer'>
        <h1 className='taxi-text-center'>{type}</h1>
        <h2 className='taxi-text-center-2'>Vehicle Type: {vehicleType}</h2>
        <div className='taxiInnerTextContainer'>
          <p className = 'content'>Driver Name: {driverName}<br/></p>
          <p className = 'content'>Seat Count: {seats}<br/></p>
          <p className = 'content'>Transmission: {transmission}<br/></p>
          <p className='taxiFee'> Fee per KM: Rs {fee}<br/></p> 
          {
            checkLogin()
          } 
        </div>
      </div>

      {/* <Link to={'/RentalForm'}>
        <div>
        <button className='rentbtn'>Rent this Vehicle</button>
        </div>
        </Link> */}
      </div>
      <Footer /> 
      </div>
      
  )
}


export default RentalPreview;
