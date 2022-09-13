import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Hotels() { 
  const [hotels, setHotels] = useState([]);

  const getHotels = () => {
    axios.get("http://localhost:8070/hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getHotels() } , []);  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Hotels</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {hotels.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem'}}>
              <Card.Img src={data.images}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
                  Price: {data.price}<br/>
                  Description: {data.description}<br/>
                  Stars: {data.stars}<br/>
                  Facilities: {data.facilities}<br/>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default Hotels;