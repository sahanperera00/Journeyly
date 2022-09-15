import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/leo/Hotel.css'

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

      <div className='hotelContainer' >
        {hotels.map((data) => {
          return (
            <Card className='hotelCard'>
              <div className='hotelImageContainer'>
              <Card.Img className="hotelImage" src={data.images}/>
              </div>
              <Card.Body className="hotelCardBody">
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="">{data.location}</Card.Subtitle>
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