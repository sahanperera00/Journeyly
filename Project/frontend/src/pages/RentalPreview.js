import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Madusha/TaxiPreview.css';
import { Link } from 'react-router-dom';

function RentalPreview() {

  const [vehicleType, setVType]=useState('');
  const [type, setType]=useState('');
  const [driverName, setDriverName]=useState('');
  const [fee, setFee]=useState('');
  const [image, setImage]=useState('');


  const {id} = useParams();

  const getVehicle = async () => {
    await axios.get("http://localhost:8070/vehicles/"+id)
      .then((res) => {
        setVType(res.data.vehicleType);
        setType(res.data.type);
        setDriverName(res.data.driverName);
        setFee(res.data.fee);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicle() }, [id]);

  return (
    <div className='previewContainer'>
      <div className="App">
                <div className='hotelImgContainer'>
                    <img className='hotelImg' alt='pic' src={image}/>
                </div>
                <div>
            <div>
            <h1 className='text-center'>{type}</h1>
                <h1 className='text-center'>{vehicleType}</h1>
            </div> 
            
    
                    <p>Driver Name{driverName}<br/></p>
                    
                    <p className='faci'> Fee per KM:  {fee}<br/></p>
                </div>
            </div>
            <Link to={'/RentalForm'}>
            <div>
                <button className='rentbtn'>Rent this Vehicle</button>
            </div>
            </Link>
        </div>
  )
}


export default RentalPreview;
