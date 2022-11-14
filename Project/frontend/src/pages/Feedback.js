import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Feedback() { 
  const [feedback, setFeedback] = useState([]);

  const getFeedback = () => {
    axios.get("http://localhost:8070/feedback")
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteFeedback = (id) => {
    axios.delete(`http://localhost:8070/feedback/delete/${id}`)  //Activates Flight deleting function
        .then((res) => {
            alert("Feedback Content Deleted");
            getFeedback();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getFeedback() });  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Feedback</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {feedback.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '1rem', padding: '1rem'}}>
              <Card.Img src = {data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.feedbackId}</Card.Subtitle>
                <Card.Text>
                 <b> category                   : </b>{data.feedbacktype}<br/>
                 <b> place of incident          : </b>{data.placeofincident}<br/>
                 <b>  phone number              : </b>{data.phonenumber}<br/>
                 <b> subject                    : </b>{data.subject}<br/>
                 <b>Details                     : </b>{data.message}<br/>
              
                </Card.Text>
                <Link to={"/feedbackUpdateForm/" + data._id}>
                <Button variant="warning">Update</Button>
                </Link>
                <Button variant="danger" className='ms-3' onClick={() => deleteFeedback(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default Feedback;