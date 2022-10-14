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
            <Card key={`${data._id} + 1`} style={{ width: '19rem', margin: '1rem'}}>
              <Card.Img key={`${data._id} + 1`} variant="top" src={data.images} />
              <Card.Body key={`${data._id} + 2`}>
                <Card.Title key={`${data._id} + 1`}>{data.name}</Card.Title>
                <Card.Subtitle key={`${data._id} + 2`} className="mb-2 text-muted">{data.shortDesc}</Card.Subtitle>
                <Card.Text key={`${data._id} + 3`}>
                  Description: {data.longDesc}<br/>
                  Location: {data.location}<br/>
                  What you need to know: {data.extra}<br/>
                  What's included: {data.includes}
                </Card.Text>
                <Link key={`${data._id} + 4`} to={"/editorDash/destinationUpdateForm/"+data._id}>
                  <Button key={`${data._id} + 1`} variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteAttraction(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default AttractionEdit;