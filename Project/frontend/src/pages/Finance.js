import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/praweena/Packages.css'


function Finance() { 
  const [finance, setFinance] = useState([]);

  const getFinance = () => {
    axios.get("http://localhost:8070/packages")
      .then((res) => {
        setFinance(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getFinance() } , []);  //Shows changes of the page

  return (
    <div className='financeMain'>
   
    <h1 className='financeHeader'>Finance</h1>
    <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
      {packages.map((data) => {
        return (
          <Card style={{ width: '75rem',height:'25rem', margin: '2rem', padding: '0rem'}} className='PackageCard'>
            <Card.Img src={data.image} className='imageFinance' />
            <Card.Body className='FinanceBody'>
              <Card.Title className='financeTitle'>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{data.FinanceId}</Card.Subtitle>
              <Card.Text>
             
              Package Type   = {data.pkgType}<br/>
              Expire Date    = {data.expDate}<br/>
              Price          = {data.price}<br/>
              Profit         = {data.profit}<br/>
              Final Price    = {data.finalPrice}<br/>

              <button className='PackageSelect' > Select</button>      
            
              </Card.Text>
            </Card.Body>
          </Card>
        )        
      })}
    </div>
  </div>
)
}


export default Finance;