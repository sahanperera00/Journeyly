

import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { deleteVehicle } from '../../../backend/controllers/vehicles';


function VehiclesEdit() { 
  const [vehicles, setVehicles] = useState([]);

  const getVehicle = () => {
    axios.get("http://localhost:8070/vehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteVehicle = (id) => {
    axios.delete(`http://localhost:8070/vehicles/delete/${id}`)  //Activates Hotel deleting function
        .then((res) => {
            alert("Vehicle Content Deleted");
            getVehicle();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getVehicle() } , []);  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Vehicle</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {vehicles.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Img src={data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
               
                type = {data.type}<br/>
                vehicleType = {data.vehicleType}<br/>
                driverName      = {data.driverName}<br/>
                ownerName        = {data.ownerName}<br/>
                email    = {data.email}<br/>
                phoneNo            ={data.phoneNo}<br/>
                fee              = {data.fee}<br/>
               
                </Card.Text>
                
                <Link key={`${data._id} + 4`} to={"/editorDash/VehicleUpdateForm/"+data._id}>
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteVehicle(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default VehiclesEdit;