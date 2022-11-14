import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { useNavigate } from 'react-router-dom';
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/praweena/PackagePreview.css'

import { Link } from 'react-router-dom';
function alertt(){
    alert("Please login to reserve a Package");
}


function PackagePreview(){
    const [name, setName] = useState('');
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');
  
  

    function checkLogin(){
        if(sessionStorage.getItem("ID")==null){
            return(
            <Link to={'/registration'} onClick={alertt} >
            <div>
            <button className='hotelbtn'>Reserve a Package</button>
            </div>
            </Link>)   
        }else{
            return(<Link to={'/PackageReservationForm/'+id}>
            <div>
            <button className='hotelbtn'>Reserve a Package</button>
            </div>
            </Link>)   
        }
     }

    const{id}=useParams();

    const getPackages=()=>{
        axios.get("http://localhost:8070/packages/"+id).then((res)=>{
                setName(res.data.name);
                setPrice(res.data.price);
                setImage(res.data.image);
                setDestination(res.data.destination);
                setMembers(res.data.members);
                setHotel(res.data.hotel);
                setRoomType(res.data.roomType);
                setVehicle(res.data.vehicle);
                setGuide(res.data.guide);
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    useEffect(()=> getPackages(),[]);

   return(
        <div className='previewContainerPackage'>
            <NavbarDark/>
            <div className="packageApp">
                <div className='PackImgContainer'>
                    <img className='packImg'  alt='pic' src={image}/>
                </div>
                <div className='packageTextContainer'>
                    <br></br>
                    <h1 className='PackageHeading'>{name}</h1>
                    <p className='packpriceTag'><b>Price of the Package: Rs {price}.00</b><br/></p>
                    <p className='#'>Destination: {destination}</p>
                    <p className='#'>Members: {members}</p>
                    <p className='#'>Hotel Name: {hotel}</p>
                    <p className='#'>Hotel Room Type: {roomType}</p>
                    <p className='#'>Transport type: {vehicle}</p>
                    <p className='#'>{guide} Guide</p>

                    {
                    checkLogin()
                    }
                    
            </div>
            {/*<Link to={'/PackageReservationForm/'+id}>
            <div>
                <button className='btnPkg'>Reserve a Package</button>
            </div>
   </Link>*/}
        </div> 
        <Footer/>
        </div>
    )
}   
   
export default PackagePreview
