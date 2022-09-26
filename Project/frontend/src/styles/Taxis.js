import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Madusha/Taxis.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Taxis() { 
  const [taxis, setTaxis] = useState([]);

  const{id}=useParams();

  const getTaxis = () => {
    axios.get("http://localhost:8070/vehicles")
      .then((res) => {
        setTaxis(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  

  useEffect(() => { getTaxis() } , []);  //Shows changes of the page

  return (
    <div className='hotelMainContainer'>
      <h1 className='hotelHeader'>Taxis</h1>

      <div className='hotelContainer'>

        <div className="hotelBodyContainer">
          {taxis.map((data) => {
          return (
            <Link to={'/RentalPreview/'+data._id}>
            <div className='CardContainer'>
              <div className='ImageContainer'>
                <img className='hotelCardImg' alt='pic' src={data.image}/>
              </div>
              <div className='TextContainer'>
                <center><h2>{data.vehicleType} ({data.type})</h2></center>
                  <p className='priceTage'>Fee per KM: Rs. {data.fee}<br/></p>
                  <p className='desTage'>driverName: {data.driverName}<br/></p>
              </div>
            </div>
            </Link>
          )        
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Taxis;