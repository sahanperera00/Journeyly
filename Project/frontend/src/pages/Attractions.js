import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Attractions() {
  const [attractions, setAttractions] = useState([]);

  const getAttractions = () => {
    axios.get("http://localhost:8070/destination")
      .then((res) => {
        setAttractions(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getAttractions() } , []);

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Attractions</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {attractions.map((data) => {
          return (
            <Card key={1} style={{ width: '19rem', margin: '1rem'}}>
              <Card.Body key={1}>
                <Card.Title key={1}>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" key={2}>{data.shortDesc}</Card.Subtitle>
                <Card.Text key={3}>
                  Description: {data.longDesc}<br/>
                  Location: {data.location}<br/>
                  What you need to know: {data.extra}<br/>
                  What's included: {data.includes}<br/>
                  Images: {data.images}<br/>
                  Adult: {data.adultCost}<br/>
                  Child: {data.childCost}
                </Card.Text>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default Attractions;