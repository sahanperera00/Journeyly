/*import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Invoice() { 
  const [invoice, setInvoice] = useState([]);

  const getInvoice = () => {
    axios.get("http://localhost:8070/invoice") 
      .then((res) => {
        setInvoice(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteInvoice = (id) => {
    axios.delete(`http://localhost:8070/invoice/delete/${id}`)
        .then((res) => {
            alert("invoice Content Deleted");
            getInvoice();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getInvoice() } , []);  //Shows changes of the page

  return (
    <div className='Invoice-text-center'>
      <h1 className='PackageIcon'>Packages Edit</h1>
<form>
      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {packages.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Img src={data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
               
                name: {data.name}<br/>
                destination: {data.destination}<br/>
                members: {data.members}<br/>
                hotel: {data.hotel}<br/>
                roomType: {data.roomType}<br/>
                vehicle: {data.vehicle}<br/>
                guide: {data.guide}<br/>
                price: {data.price}<br/>
               
                </Card.Text>
                
                
                <Link key={`${data._id} + 4`} to={"/editorDash/PackageUpdateForm/"+data._id}> 
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deletePackages(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
      </form>
    </div>
  )
}

export default PackagesEdit;*/