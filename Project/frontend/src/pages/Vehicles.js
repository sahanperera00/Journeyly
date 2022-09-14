
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Vehicles() { 
  const [Vehicles, setVehicle] = useState([]);

  const getVehicle = () => {
    axios.get("http://localhost:8070/packages")
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getVehicle() } , []);  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Vehicles</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {Vehicles.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '2rem', padding: '1rem'}}>
              <Card.Img src={data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.VehiclesId}</Card.Subtitle>
                <Card.Text>
   
                type = {data.name}<br/>
                vehicleType = {data.destination}<br/>
                driverName      = {data.members}<br/>
                ownerName        = {data.hotel}<br/>
                email    = {data.roomType}<br/>
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