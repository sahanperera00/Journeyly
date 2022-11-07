import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function FinanceEdit() { 
  const [finance, setFinance] = useState([]);

  const getFinance = () => {
    axios.get("http://localhost:8070/finance")
      .then((res) => {
        setFinance(res.data);
      })
      .catch((err) => {``
        alert(err);
      });
  }

  const deleteFinance = (id) => {
    axios.delete(`http://localhost:8070/finance/remove/${id}`)  
        .then((res) => {
            alert("Flight Content Deleted");
            getFinance();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getFinance() });  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Finance</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {finance.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.financeid}</Card.Subtitle>
                <Card.Text>
                 <b> Package Type            : </b>{data.pkgType}<br/>
                 <b> Expire Date            : </b>{data.expDate}<br/>
                 <b> Price            :          </b>{data.price}<br/>
                 <b> profit        :             </b>{data.profit}<br/>
                 <b> Final Price               : </b>{data.finalPrice}<br/>
                </Card.Text>
                <Link to={"/editorDash/financeupdateform/" + data._id}>
                <Button variant="warning">Update</Button>
                </Link>
                <Button variant="danger" className='ms-3' onClick={() => deleteFinance(data.id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default FinanceEdit;