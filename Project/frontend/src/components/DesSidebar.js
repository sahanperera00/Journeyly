import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/sahan/DesSidebar.css';

function DesSidebar() {
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
    <div className='DesSidebar'>
      <div className='container d-flex flex-wrap'>
        {attractions.map((data) => {
          return (
            <Card className='DesSidebarCard' key={`${data._id} + 1`} style={{ margin: '1rem'}}>
              <Card.Img key={`${data._id} + 1`} variant="top" src={data.images} />
              <Card.Body key={`${data._id} + 2`}>
                <Card.Title key={`${data._id} + 1`}>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" key={2}>{data.shortDesc}</Card.Subtitle>
                <Card.Text key={`${data._id} + 3`}>
                  Description: {data.longDesc}<br/>
                  Location: {data.location}<br/>
                  What you need to know: {data.extra}<br/>
                  What's included: {data.includes}<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default DesSidebar;