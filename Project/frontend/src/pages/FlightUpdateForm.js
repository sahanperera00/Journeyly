import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/sudul/FlightUpdateForm.css';
import { useNavigate } from 'react-router-dom';

function FlightUpdateForm() {
    const [name, setName]=useState('');
    const [flightId,setFligtId]=useState('');
    const [airline,setAirline]=useState('');
    const [startAirport,setStartAirport]=useState('');
    const [departureDate,setDepartureDate]=useState('');
    const [departureTime,setDepartureTime]=useState('');
    const [destinationAirport,setDestinationAirport]=useState('');
    const [arrivalDate,setArrivalDate]=useState('');
    const [arrivalTime,setArrivalTime]=useState('');
    const [imageI, setImageI] = useState('');
    const [images, setImages] = useState('');
    const [gate, setGate] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();
  
    const getFlight = () => {   
        axios.get("http://localhost:8070/flights/"+id).then((res) => {
                const updateFlight = {
                    name: res.data.name,
                    flightId: res.data.flightId,
                    airline: res.data.airline,
                    startAirport: res.data.startAirport,
                    departureDate: res.data.departureDate,
                    departureTime: res.data.departureTime,
                    destinationAirport: res.data.destinationAirport,
                    arrivalDate: res.data.arrivalDate,
                    arrivalTime: res.data.arrivalTime,
                    gate: res.data.gate,
                    imageI: res.data.imageI
                }
                setName(updateFlight.name);
                setFligtId(updateFlight.flightId);
                setAirline(updateFlight.airline);
                setStartAirport(updateFlight.startAirport);
                setDepartureDate(updateFlight.departureDate);
                setDepartureTime(updateFlight.departureTime);
                setDestinationAirport(updateFlight.destinationAirport);
                setArrivalDate(updateFlight.arrivalDate);
                setArrivalTime(updateFlight.arrivalTime);
                setImages(updateFlight.imageI);
                setGate(updateFlight.gate);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getFlight() },[]);

    return (
        <div className='FlightUpdateFormMainCont'>
            <h1>Update Flight Details</h1>
        <div className="FlightUpdateFormCont">
            <form onSubmit={async (e) => {
                e.preventDefault();

                const imageRef = ref(storage, `images/flights/${name + imageI.name}`);
        
                uploadBytes(imageRef, imageI)
                    .then(() => {
                        console.log('Uploaded image');
                    }).catch((err) => {
                        console.log(err);
                    });

                await getDownloadURL(ref(storage, `images/flights/${name + imageI.name}`))
                    .then((url) => {
                        console.log(url);
                        setImages(url);
                    }).catch((err) => {
                        console.log(err);
                    });  

                const newFlight = {
                    name,
                    flightId,
                    airline,
                    startAirport,
                    departureDate,
                    departureTime,
                    destinationAirport,
                    arrivalDate,
                    arrivalTime,
                    gate
                   // imageI
                }

                axios.put("http://localhost:8070/flights/update/"+id, newFlight)
                    .then(() => {
                        alert("Flight updated successfully");
                        navigate('/editorDashboard/editorWebContent/flight');

                    }).catch((err) => {
                        alert(err);
                    })
            }}>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Flight ID</label>
                    <input type="text" className="form-control" value={flightId}
                    onChange={(e) => {
                        setFligtId(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Airline</label>
                    <input type="text" className="form-control" value={airline}
                    onChange={(e) => {
                        setAirline(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Flight Leaving Airport</label>
                    <input type="text" className="form-control" value={startAirport}
                    onChange={(e) => {
                        setStartAirport(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Departure Date (GMT+5:30)</label>
                    <input type="date" className="form-control" value={departureDate}
                    onChange={(e) => {
                        setDepartureDate(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Departure Time (GMT+5:30)</label>
                    <input type="time" className="form-control" value={departureTime}
                    onChange={(e) => {
                        setDepartureTime(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Destination Airport</label>
                    <input type="text" className="form-control" value={destinationAirport}
                    onChange={(e) => {
                        setDestinationAirport(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Arrival Date (GMT+5:30)</label>
                    <input type="date" className="form-control" value={arrivalDate}
                    onChange={(e) => {
                        setArrivalDate(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Arrival Time (GMT+5:30)</label>
                    <input type="time" className="form-control" value={arrivalTime}
                    onChange={(e) => {
                        setArrivalTime(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                        <label className="form-label">Gate</label>
                        <input type="text" className="form-control" value={gate}
                            onChange={(e) => {
                                setGate(e.target.value);
                            }} required />
                    </div>    
                    <br />          
                {/* <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="file" className="form-control" value={imageI}
                    onChange={(e) => {
                        setImages(e.target.files[0]);
                    }} />
                </div><br /> */}
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}

export default FlightUpdateForm;