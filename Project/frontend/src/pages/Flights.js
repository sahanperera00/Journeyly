import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Flights() { 
  const [flights, setFlights] = useState([]);

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
    <div className='container text-center'>
      <h1 className='text-center'>Flights</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {flights.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.flightId}</Card.Subtitle>
                <Card.Text>
                Leaving Airport: {data.startAirport}<br/>
                  Departure Date: {data.departureDate}<br/>
                  Departure Time: {data.departureTime}<br/>
                  Destination Airport: {data.destinationAirport}<br/>
                  Arrival Date: {data.arrivalDate}<br/>
                  Arrival Time: {data.arrivalTime}<br/>
                  Economy Class Ticket Price: {data.economyClass}<br/>
                  Business Class Ticket Price: {data.businessClass}<br/>
                  Image: {data.images}<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default Flights;