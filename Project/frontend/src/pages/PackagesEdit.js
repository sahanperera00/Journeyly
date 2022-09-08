
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function PackagesEdit() { 
  const [packages, setPackages] = useState([]);

  const getPackages = () => {
    axios.get("http://localhost:8070/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deletePackages = (id) => {
    axios.delete(`http://localhost:8070/packages/remove/${id}`)  //Activates Package deleting function
        .then((res) => {
            alert("Package Content Deleted");
            getPackages();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getPackages() } , []);  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Package</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {packages.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.packageId}</Card.Subtitle>
                <Card.Text>
                name: {data.name}<br/>
                destination: {data.destination}<br/>
                members: {data.members}<br/>
                hotel: {data.hotel}<br/>
                roomType: {data.roomType}<br/>
                vehicle: {data.vehicle}<br/>
                guide: {data.guide}<br/>
                price: {data.price}<br/>
                image: {data.image}<br/>
                </Card.Text>
                <Button variant="warning">Update</Button>
                <Button variant="danger" className='ms-3' onClick={() => deletePackages(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default PackagesEdit;