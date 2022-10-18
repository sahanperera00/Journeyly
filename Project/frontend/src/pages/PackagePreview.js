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
  
  

    const{id}=useParams();

    const getPackages=()=>{
        axios.get("http://localhost:8070/packages/"+id).then((res)=>{
                setName(res.data.name);
                setPrice(res.data.price);
                setImage(res.data.image);
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    useEffect(()=> getPackages(),[]);

   return(
        <div className='previewContainerPackage'>
            <div>
                <h1 className='PreviewHeading'>{name}</h1>
            </div> 
            <div className="Ap">
                <div className='PackImg'>
                    <img  alt='pic' src={image}/>
                </div>
                <div className='previewtest'>
                    <p className='pkgprice'>Price of the Package: {price}<br/></p>
                   

                    
            </div>
            <Link to={'/PackageReservationForm/'+id}>
            <div>
                <button className='btn btn dark'>Make A Reservation</button>
            </div>
            </Link>
        </div> </div>
    )
}   
   
export default PackagePreview
