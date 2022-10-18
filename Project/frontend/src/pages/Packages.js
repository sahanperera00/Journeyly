
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/praweena/Packages.css'
import { Link } from 'react-router-dom';
import React from "react";



function Packages() { 
  const [packages, setPackages] = useState([]);

 
  

  //const [show, setShow] = useState(false);
  //const [email, setEmail] = useState('');
  
 // const handleClose = () => setShow(false);
 // const handleShow = () => setShow(true);


  const getPackages = () => {
    axios.get("http://localhost:8070/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getPackages() } , []);  //Shows changes of the page

  return (
    <div className='packageMain'>
   
    <h1 className='packageHeader'>Packages
          <h2 className='PackageDiscription'>Enjoy WonderFul Experience in Sri Lanka<br/>Let us Help You Prepare <br/>Plan Your Trip With Us </h2></h1>
    <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
      {packages.map((data) => {
        return (
          <Card style={{ width: '75rem',height:'25rem', margin: '2rem', padding: '0rem'}} className='PackageCard'>
            <Card.Img src={data.image} className='imagePackage' />
            <Card.Body className='PackageBody'>
              <Card.Title className='packageTitle'>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{data.PackagesId}</Card.Subtitle>
              <Card.Text>
             
              Enter Package Name = {data.name}<br/>
              Travel Destination = {data.destination}<br/>
              Members Count      = {data.members}<br/>
              Hotel Name         = {data.hotel}<br/>
              Hotel Room Type    = {data.roomType}<br/>
              Vehicle            ={data.vehicle}<br/>
              Guide              = {data.guide}<br/> <br/>
              Price (LK rupees)  = {data.price}  
           
          <button type="button" class="PackageSelect" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Select
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h1  >Confirm the Package</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
        <button type="button" class="PopupNo"  data-bs-dismiss="modal">NO</button> <br></br>
        <button type="button" class="PopupYes"> <Link to={'/PackagesEdit/'+data._id}>Yes</Link></button> <br></br>
      </div>
    </div>
  </div>

              </Card.Text>
            </Card.Body>
          </Card>
        )        
      })}
    </div>
  </div>
)
}


export default Packages;