import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/sudul/FlightForm.css';
import { useNavigate } from 'react-router-dom';

function FlightForm() {
    const [name, setName] = useState('');
    const [flightId, setFligtId] = useState('');
    const [airline, setAirline] = useState('');
    const [startAirport, setStartAirport] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [destinationAirport, setDestinationAirport] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [gate, setGate] = useState('');
    const [imageI, setImageI] = useState('');
    // const [images, setImages] = useState('');
    const navigate = useNavigate();

    return (
        <div className='FlightFormMainCont'>
            <h1>Add Flight Content</h1>
            <div className="FlightFormCont">

                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/flights/${name + imageI.name}`);

                    await uploadBytes(imageRef, imageI)
                        .then(() => {
                            console.log('Uploaded images');
                        }).catch((err) => {
                            console.log(err);
                        })

                    await getDownloadURL(ref(storage, `images/flights/${name + imageI.name}`))
                        .then((url) => {
                            // setImages(url);
                            console.log(url);

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
                                gate,
                                imageI: url
                            }

                            axios.post("http://localhost:8070/flights/create", newFlight)
                                .then(() => {
                                    alert("Flight Content added successfully");
                                    navigate('/editorDashboard/editorWebContent/flight');
                                }).catch((err) => {
                                    alert("Error adding Flight Content");
                                    console.log(err);
                                })
                        }).catch((err) => {
                            console.log(err);
                        })


                }}>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Flight ID</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setFligtId(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Airline</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setAirline(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Flight Leaving Airport</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setStartAirport(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Departure Date (GMT+5:30)</label>
                        <input type="date" className="form-control"
                            onChange={(e) => {
                                setDepartureDate(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Departure Time (GMT+5:30)</label>
                        <input type="time" className="form-control"
                            onChange={(e) => {
                                setDepartureTime(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Destination Airport</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setDestinationAirport(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Arrival Date (GMT+5:30)</label>
                        <input type="date" className="form-control"
                            onChange={(e) => {
                                setArrivalDate(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Arrival Time (GMT+5:30)</label>
                        <input type="time" className="form-control"
                            onChange={(e) => {
                                setArrivalTime(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Gate</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setGate(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setImageI(e.target.files[0]);
                            }} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default FlightForm;