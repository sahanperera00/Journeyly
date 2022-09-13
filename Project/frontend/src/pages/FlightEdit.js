import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

  useEffect(() => { getFlights() });  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Flights</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {flights.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '1rem', padding: '1rem'}}>
              <Card.Img src = {data.imageI}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.flightId}</Card.Subtitle>
                <Card.Text>
                 <b> Leaving Airport            : </b>{data.startAirport}<br/>
                 <b> Departure Date             : </b>{data.departureDate}<br/>
                 <b> Departure Time             : </b>{data.departureTime}<br/>
                 <b> Destination Airport        : </b>{data.destinationAirport}<br/>
                 <b> Arrival Date               : </b>{data.arrivalDate}<br/>
                 <b> Arrival Time               : </b>{data.arrivalTime}<br/>
                 <b> Economy Class Ticket Price : </b>{data.economyClass}<br/>
                </Card.Text>
                <Link to={"/editorDash/flightUpdateForm/" + data._id}>
                <Button variant="warning">Update</Button>
                </Link>
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