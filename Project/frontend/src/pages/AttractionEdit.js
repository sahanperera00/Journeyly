import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AttractionEdit() {
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

  const deleteAttraction = (id) => {
    axios.delete(`http://localhost:8070/destination/delete/${id}`)
        .then((res) => {
            alert("Attraction Deleted");
            getAttractions();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getAttractions() } , []);

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Attractions (Editor)</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {attractions.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.shortDesc}</Card.Subtitle>
                <Card.Text>
                  Description: {data.longDesc}<br/>
                  Location: {data.location}<br/>
                  What you need to know: {data.extra}<br/>
                  What's included: {data.includes}<br/>
                  Images: {data.images}<br/>
                  Adult: {data.adultCost}<br/>
                  Child: {data.childCost}
                </Card.Text>
                <Link to={"/editorDash/destinationUpdateForm/"+data._id}>
                  <Button variant="warning">Update</Button>
                </Link>
                <Button variant="danger" className='ms-3' onClick={() => deleteAttraction(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default AttractionEdit;