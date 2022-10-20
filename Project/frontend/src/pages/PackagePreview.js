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
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');
  
  

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
            <div className='package'>
                <h1 className='PreviewHeading'>{name}</h1>
            </div> 
            <div className="Ap">
                <div className='PackImg'>
                    <img  alt='pic' src={image}/>
                </div>
                <div className='previewtest'>
                    <br></br>
                    <p className='#'>Price of the Package: {price}<br/></p>
                   <p className='#'>Destination  -{destination}</p>
                   <p className='#'>Members -{members}</p>
                   <p className='#'>Hotel Name -{hotel}</p>
                   <p className='#'>Hotel Room Type -{roomType}</p>
                   <p className='#'>Transport type -{vehicle}</p>
                   <p className='#'>{guide} Guide</p>

                    
                    
            </div>
            <Link to={'/PackageReservationForm/'+id}>
            <div>
                <button className='btnPkg'>Reserve a Package</button>
            </div>
            </Link>
        </div> </div>
    )
}   
   
export default PackagePreview
