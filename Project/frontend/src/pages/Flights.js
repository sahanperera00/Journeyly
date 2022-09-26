import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/sudul/flight.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Flights() { 
  const [flights, setFlights] = useState([]);

  const{id}=useParams();

  const getFlights = () => {
    axios.get("http://localhost:8070/flights")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  

  useEffect(() => { getFlights() } , []);  //Shows changes of the page

  return (
    <div className='flightMainContainer'>
      <div className='flightApp'>
      <h1 className='flightHeader'>Flights</h1>

      <div className='flightContainer'>
        <div className="flightSideBar">
          <h1>SideBar</h1>
        </div>
        <div className="flightBodyContainer">
          {flights.map((data) => {
          return (
            <Link to={'/flightPreview/'+data._id}>
            <div className='CardContainer'>
              <div className='ImageContainer'>
                <img className='flightCardImg' alt='pic' src={data.imageI}/>
              </div>
              <div className='TextContainer'>
                <center><h2>{data.name} </h2></center>
                  <p className='price'>Price: Rs.{data.economyClass} upwards<br/></p>
                  <p className='desc'>Leaving Airport: {data.startAirport}<br/></p>
                  <p className='desc'>Departure Date: {data.departureDate}<br/></p>
                  <p className='depar'>Departure Time: {data.departureTime}<br/></p>
              </div>
            </div>
            </Link>
          )        
        })}
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Flights;