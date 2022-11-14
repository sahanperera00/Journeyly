import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import '../styles/kalana/invoics.css'



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
    const DownloadReportPDF = () => {
      const pdf = new jsPDF("landscape", "px", "A2", false);
      //const pdf = new jsPDF("p","pt","A3");
      const data = document.querySelector("#down");
      pdf.html(data).then(() => {
      /*  for (let i = 0; i < 11; i++) {
          var pageCount = pdf.getNumberOfPages();
          console.log(pageCount);
          pdf.deletePage(pageCount);
        }*/
  
        pdf.save("Invoice.pdf");
      });
    };

  useEffect(() => { getInvoice() } , []);  //Shows changes of the page

  return (
    <div className='Invoice-text-center'>

      <button className='btnInvoice'> <Link  to="/financeDashboard/InvoiceForm/">  Add Invoice</Link></button>

      <h1 className='PackageIcon'>Invoice </h1>
<form>

      <div  className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {invoice.map((data) => {
          return (
            <Card style={{ width: '100rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
               <div id='down'>
                Full Name  : {data.fName}<br/>
                Email  : {data.email}<br/>
                Phone Number  : {data.phone}<br/>
                Type (Flights/Taxis/Packages): {data.Type}<br/>
                Price : {data.price}<br/>
                AdditonalaNote : {data.additonalaNote}<br/>
                </div>
                </Card.Text>
                
                
                <Link key={`${data._id} + 4`} to={"/financeDashboard/InvoiceUpdateForm/"+data._id}> 
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteInvoice(data._id)}>Delete</Button>
                <Button onClick={DownloadReportPDF} className="downl" >Download </Button>
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