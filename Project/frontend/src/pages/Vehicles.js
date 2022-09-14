
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Vehicles() { 
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = () => {
    axios.get("http://localhost:8070/vehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicles() } );  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Vehicles</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {vehicles.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '2rem', padding: '1rem'}}>
              <Card.Img src={data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.VehiclesId}</Card.Subtitle>
                <Card.Text>
   
                type = {data.type}<br/>
                vehicleType = {data.vehicleType}<br/>
                driverName      = {data.driverName}<br/>
                ownerName        = {data.ownerName}<br/>
                email    = {data.email}<br/>
                phoneNo            ={data.phoneNo}<br/>
                fee              = {data.fee}<br/>
                
              
                </Card.Text>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}


  export default Vehicles;