/*import { useState, useEffect } from 'react';  //STILL CONTINUING
import axios from 'axios';
import { useParams } from 'react-router-dom';


function HotelUpdateForm(){
    const [name, setName]=useState('');
    const [location,setLocation]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [stars,setStars]=useState('');
    const [facilities,setFacilities]=useState('');
    const [images,setImages]=useState('');

    const{id}=useParams();

    const getHotel=()=>{
        axios.get("http://localhost:8070/hotels/"+id).then((res)=>{
            const updateHotelDetails={
                name: res.data.name,
                location: res.data.location,
                price: res.data.price,
                description: res.data.description,
                stars: res.data.stars,
                facilities: res.data.facilities,
                images: res.data.images,

            }
            setName(updateHotelDetails.name);
            setLocation(updateHotelDetails.location);
            setPrice(updateHotelDetails.price);
            setDescription(updateHotelDetails.description);
            setStars(updateHotelDetails.stars);
            setFacilities(updateHotelDetails.facilities);
            setImages(updateHotelDetails.images);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(()=> getHotel(),[]);
}   */ //STILL CONTINUING