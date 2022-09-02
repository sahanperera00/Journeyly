import { useState } from 'react';
import axios from 'axios';

function FlightForm(){
    const [name, setName]=useState('');
    const [flightId,setFligtId]=useState('');
    const [startAirport,setStartAirport]=useState('');
    const [departureDate,setDepartureDate]=useState('');
    const [departureTime,setDepartureTime]=useState('');
    const [destinationAirport,setDestinationAirport]=useState('');
    const [arrivalDate,setArrivalDate]=useState('');
    const [arrivalTime,setArrivalTime]=useState('');
    const [economyClass,setEconomyPrice]=useState('');
    const [businessClass,setBusinessPrice]=useState('');
    const [images,setImages]=useState('');



    return (
        <div>
            <h1 className='text-center'>Add Flight Content</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();

                const newFlight = {
                    name,
                    flightId,
                    startAirport,
                    departureDate,
                    departureTime,
                    destinationAirport,
                    arrivalDate,
                    arrivalTime,
                    economyClass,
                    businessClass,
                    images
                }

                axios.post("http://localhost:8070/flights/create", newFlight)
                    .then(() => {
                        alert("Flight Content added successfully");
                    }).catch((err) => {
                        alert("Error adding Flight Content");
                        console.log(err);
                    })
            }}>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Flight ID</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setFligtId(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Flight Leaving Airport</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setStartAirport(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Departure Date (GMT+5:30)</label>
                    <input type="date" className="form-control" 
                    onChange={(e) => {
                        setDepartureDate(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Departure Time (GMT+5:30)</label>
                    <input type="time" className="form-control" 
                    onChange={(e) => {
                        setDepartureTime(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Destination Airport</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setDestinationAirport(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Arrival Date (GMT+5:30)</label>
                    <input type="date" className="form-control" 
                    onChange={(e) => {
                        setArrivalDate(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Arrival Time (GMT+5:30)</label>
                    <input type="time" className="form-control" 
                    onChange={(e) => {
                        setArrivalTime(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Economy Class Flight Ticket Price</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setEconomyPrice(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Business Class Flight Ticket Price</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setBusinessPrice(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setImages(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default FlightForm;