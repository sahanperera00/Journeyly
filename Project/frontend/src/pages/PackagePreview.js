import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { useNavigate } from 'react-router-dom';

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/praweena/Packages.css'

import { Link } from 'react-router-dom';


function PackagePreview(){
    const [name, setName] = useState('');
 /*   const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');*/
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');
  //  const [name, setName] = useState('');
    const [hotel_Name, setHotelName] = useState('');
    const [check_in, setCheckin] = useState('');
    const [check_out, setCheckout] = useState('');
    const [suite, setSuite] = useState('');
    const [customizations, setCustomizations] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');

    const{id}=useParams();

    const getPackages=()=>{
        axios.get("http://localhost:8070/packages/"+id).then((res)=>{
            /*const updateHotelDetails={
                name: res.data.name,
                location: res.data.location,
                price: res.data.price,
                description: res.data.description,
                stars: res.data.stars,
                facilities: res.data.facilities,
                images: res.data.images,

            }*/
            setName(res.data.name);
              /*  setDestination(res.data.destination);
                setMembers(res.data.members);
                setHotel(res.data.hotel);
                setRoomType(res.data.roomType);
                setVehicle(res.data.vehicle);
                setGuide(res.data.guide);*/
                setPrice(res.data.price);
                setImage(res.data.image);
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    useEffect(()=> getPackages(),[]);

    const navigate = useNavigate();
    function checkDate(){
        var indate= document.getElementById();
        var outdate = document.getElementById();
        if(indate.getDate()<=outdate.getDate()){
            /*Allow transaction*/ 
        }else{
            /*Dont allow */
        }
    }


    return(
        <div className='previewContainerPackage'>
            <div>
                <h1 className='text-center'>{name}</h1>
            </div> 
            <div className="Ap">
                <div className='PackImg'>
                    <img className='PackImg' alt='pic' src={image}/>
                </div>
                <div className='PackagePreview'>
                    <p >Price of the Package: {price}<br/></p>
                   


           
     
          <form className='packageRes' onSubmit={async(e) => {
               <h1>Package Booking Details</h1>
            e.preventDefault();
   
            const newBook = {
              
                name,
                hotel_Name,
                check_in,
                check_out,
                suite,
                customizations,
                adults,
                children
              };
              console.log(newBook);      
              axios.post("http://localhost:8070/hotelRes/create", newBook)
              .then(() => {
                alert("Hotel Booked Successfully");
                navigate('/hotels');
              }).catch((err) => {
                alert("Error ");
                console.log(err);
              });
            }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Hotel Name</label>
                <input type="text" className="form-control" onChange={(e) => {setHotelName(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Check In </label>
                <input type="date" className="form-control" onChange={(e) => {setCheckin(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Check Out</label>
                <input type="date" className="form-control" onChange={(e) => {setCheckout(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Suite</label>
                <input type="text" className="form-control" onChange={(e) => {setSuite(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">customizations</label>
                <input type="text" className="form-control" onChange={(e) => {setCustomizations(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Number of Adults</label>
                <input type="Number" className="form-control" onChange={(e) => {setAdults(e.target.value)}} min={0} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Number of Children</label>
                <input type="Number" className="form-control" onChange={(e) => {setChildren(e.target.value)}} min={0} required/>
              </div><br />
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div>
               
            </div>
        </div>


    )

    

    
        }  
export default PackagePreview
