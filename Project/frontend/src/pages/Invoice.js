import Card from 'react-bootstrap/Card';
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

      <button className='btnnPkg'> <Link  to="/financeDashboard/InvoiceForm/">  Add Invoice</Link></button>

      <h1 className='PackageIcon'>Invoice </h1>
<form>
      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {invoice.map((data) => {
          return (
            <Card style={{ width: '100rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
               
                Full Name  : {data.fName}<br/>
                Email  : {data.email}<br/>
                Phone Number  : {data.phone}<br/>
                Type (Flights/Taxis/Packages): {data.Type}<br/>
                Price : {data.price}<br/>
                AdditonalaNote : {data.additonalaNote}<br/>
               
                </Card.Text>
                
                
                <Link key={`${data._id} + 4`} to={"/financeDashboard/InvoiceUpdateForm/"+data._id}> 
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteInvoice(data._id)}>Delete</Button>
                <Button >Download</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
      </form>
    </div>
  )
}

export default Invoice;