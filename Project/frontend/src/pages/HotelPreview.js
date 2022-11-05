import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/leo/HotelPreview.css'
import { Link } from 'react-router-dom';

function alertt(){
    alert("Please login to reserve a flight");
}

function HotelPreview(){
    const [name, setName]=useState('');
    const [location,setLocation]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [stars,setStars]=useState('');
    const [facilities,setFacilities]=useState('');
    const [images,setImages]=useState('');
    // const [hotel, setHotel] = useState('');

    function checkLogin(){
        if(localStorage.getItem("ID")==null){
            return(
            <Link to={'/registration'} onClick={alertt} >
            <div>
                <button className='hotelbtn'>Make A Reservation</button>
            </div>
            </Link>)   
        }else{
            return(<Link to={'/hotelResForm/'+id}>
            <div>
                <button className='hotelbtn' >Make A Reservation</button>
            </div>
            </Link>)   
        }
     }

    const{id}=useParams();

    const getHotel=()=>{
        axios.get("http://localhost:8070/hotels/"+id).then((res)=>{
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
            setLocation(res.data.location);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setStars(res.data.stars);
            setFacilities(res.data.facilities);
            setImages(res.data.images);
            // setHotel(res.data);
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    useEffect(()=> getHotel(),[]);

    return(
        <div className='previewContainer'>
            <div>
                <h1 className='text-center'>{name}</h1>
            </div> 
            <div className="App">
                <div className='hotelImgContainer'>
                    <img className='hotelImg' alt='pic' src={images}/>
                </div>
                <div>
                    <p>Price per Night: {price}<br/></p>
                    <p>{description}<br/></p>
                    <p>Stars: {stars}<br/></p>
                    Facilities;<p className='facil'> {facilities}<br/></p>
                </div>
                {
                    checkLogin()
                }
            </div>
            {/* <Link to={'/hotelResForm/'+id}>
            <div>
                <button className='hotelbtn'>Make A Reservation</button>
            </div>
            </Link> */}
        </div>
    )
}   

export default HotelPreview;
