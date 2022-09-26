import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/madusha/RentalPreview.css';
import rentalForm from './rentalForm';

function rentalPreview() {
  const [vehicle, setVehicle] = useState([]);

  const {id} = useParams();

  const getVehicle = async () => {
    await axios.get("http://localhost:8070/vehicles/"+id)
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicle() }, [id]);

  return (
    <>
      <div className='rentalPreviewContainer' style={{ backgroundImage: `url(${vehicle.image})` }}>
      <div className='rentalPreviewBlueDiv' />
      <div className='rentalpreviewTextContainer'>
        <h1 className='rentalpreviewh1'>{vehicle.vehicleType}</h1>
        <h2 className='rentalpreviewh2'>{vehicle.type}</h2>
        <h3 className='rentalpreviewh3'>{vehicle.driverName}</h3>
        <h2 className='rentalpreviewp'>{vehicle.fee}</h2><br />
        <a href='#rentalform' className='reserveBtn'>Rent this vehicle</a>
      </div>
      </div>
      <div className='rentalFormContainer'>
        <rentalForm rental={vehicle} />
      </div>
    </>
  )
}

export default rentalPreview;