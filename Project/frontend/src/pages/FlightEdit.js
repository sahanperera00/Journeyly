import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function FlightEdit() { 
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

  const deleteFlights = (id) => {
    axios.delete(`http://localhost:8070/flights/remove/${id}`)  //Activates Flight deleting function
        .then((res) => {
            alert("Flight Content Deleted");
            getFlights();
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
                  Departure Time: {data.departureTime}<br/>
                  Destination Airport: {data.destinationAirport}<br/>
                  Arrival Time: {data.arrivalTime}<br/>
                  Economy Class Ticket Price: {data.economyClass}<br/>
                  Business Class Ticket Price: {data.businessClass}<br/>
                  Image: {data.images}<br/>
                </Card.Text>
                <Button variant="warning">Update</Button>
                <Button variant="danger" className='ms-3' onClick={() => deleteFlights(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default FlightEdit;