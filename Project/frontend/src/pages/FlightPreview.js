import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import '../styles/sudul/flightPreview.css';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NavbarDark from "../components/NavbarDark";
import Footer from "../components/Footer";

function alertt(){
    alert("Please login to reserve a flight");
}

function FlightPreview() {
    const [name, setName]=useState('');
    const [flightId,setFligtId]=useState('');
    const [airline,setAirline]=useState('');
    const [startAirport,setStartAirport]=useState('');
    const [departureDate,setDepartureDate]=useState('');
    const [departureTime,setDepartureTime]=useState('');
    const [destinationAirport,setDestinationAirport]=useState('');
    const [arrivalDate,setArrivalDate]=useState('');
    const [arrivalTime,setArrivalTime]=useState('');
    const [economyClass,setEconomyPrice]=useState('');
    const [businessClass,setBusinessPrice]=useState('');
    const [imageI, setImageI] = useState('');
    const [gate, setGate] = useState('');
 //   const [images, setImages] = useState('');


 function checkLogin(){
    if(sessionStorage.getItem("ID")==null){
        return(
        <Link to={'/registration'} onClick={alertt} >
        <div>
            <button className='flightBtn'>Make A Reservation</button>
        </div>
        </Link>)   
    }else{
        return(<Link to={'/flightResForm/'+id}>
        <div>
            <button className='flightBtn' >Make A Reservation</button>
        </div>
        </Link>)   
    }
 }

    const {id} = useParams();
  
    const getFlight = () => {   
        axios.get("http://localhost:8070/flights/"+id).then((res) => {
               /* const updateFlight = {
                    name: res.data.name,
                    flightId: res.data.flightId,
                    startAirport: res.data.startAirport,
                    departureDate: res.data.departureDate,
                    departureTime: res.data.departureTime,
                    destinationAirport: res.data.destinationAirport,
                    arrivalDate: res.data.arrivalDate,
                    arrivalTime: res.data.arrivalTime,
                    economyClass: res.data.economyClass,
                    businessClass: res.data.businessClass,
                    images: res.data.images
                } */
                setName(res.data.name);
                setFligtId(res.data.flightId);
                setAirline(res.data.airline);
                setStartAirport(res.data.startAirport);
                setDepartureDate(res.data.departureDate);
                setDepartureTime(res.data.departureTime);
                setDestinationAirport(res.data.destinationAirport);
                setArrivalDate(res.data.arrivalDate);
                setArrivalTime(res.data.arrivalTime);
                setEconomyPrice(res.data.economyClass);
                setBusinessPrice(res.data.businessClass);
                setImageI(res.data.imageI);
                setGate(res.data.gate);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getFlight() },[]);

    return(
        
        <div className='flightPreviewContainer'>
            <NavbarDark/>
        <div className="flightApp">
            <div className='flightimgContainer'>
                <img alt='pic' className='flightImg' src={imageI}/>
              </div>
              <div className='flighttextContainer'>
                 <h1 className='flightheading'>{name}</h1>
                 <h3>{airline}</h3>
                 <br></br>
                 <b> Leaving Airport            : </b>{startAirport}<br/>
                 <b> Departure Date             : </b>{departureDate}<br/>
                 <b> Departure Time             : </b>{departureTime}<br/>
                 <b> Destination Airport        : </b>{destinationAirport}<br/>
                 <b> Arrival Date               : </b>{arrivalDate}<br/>
                 <b> Arrival Time               : </b>{arrivalTime}<br/>
                 <b> Gate                       : </b>{gate}<br/>
                 <b> Economy Class Ticket Price : </b> Rs {economyClass}<br/>
                 <b> Business Class Ticket Price : </b> Rs {businessClass}<br/>
                 <br/>
                 {
                    checkLogin()
                 }
                 
            </div>
        </div>
        <Footer/>
        </div>

    )

}   

export default FlightPreview;
