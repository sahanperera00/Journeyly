import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import '../styles/madusha/RentalPreview.css';
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
        setImage(res.data.Image);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicle() }, [id]);

  return (
    <>
      <div className='rentalPreviewContainer' style={{ backgroundImage: `url(${image})` }}>
      <div className='rentalPreviewBlueDiv' />
      <div className='rentalpreviewTextContainer'>
        <h1 className='rentalpreviewh1'>{vehicleType}</h1>
        <h2 className='rentalpreviewh2'>{type}</h2>
        <h3 className='rentalpreviewh3'>{driverName}</h3>
        <h2 className='rentalpreviewp'>{fee}</h2><br />
      </div>
      </div>
      <Link to={'/rentalForm'}>
        <div>
            <button className='hotelbtn'>Rent this Vehicle</button>
        </div>
      </Link>
    </>
  )
}


export default RentalPreview;