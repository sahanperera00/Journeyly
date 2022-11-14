import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sudul/flightResUpdateForm.css';


function FlightResUpdateForm() {
    const [flight, setFlight] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [airline, setAirline] = useState('');
    const [depDate, setDepDate] = useState('');
    const [depTime, setDepTime] = useState('');
    const [startAirport, setDepAir] = useState('');
    const [flightAirport, setFlightAir] = useState('');
    const [passportID, setppID] = useState('');
    const [email, setEmail] = useState('');
    const [classType, setClass] = useState('');
    const [price, setPrice] = useState('');
    const [business, setBusiness] = useState('');
    const [economy, setEconomy] = useState('');
    const [seat, setSeat] = useState('');

    

    const { id } = useParams();
    const { flightResId } = useParams();
    const navigate = useNavigate();

    const getReservation = () => {
        axios.get("http://localhost:8070/flightTicket/" + flightResId)
            .then((res) => {
                setFlight(res.data.flightName);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setPhoneNo(res.data.phoneNo);
                setppID(res.data.passportID);
                setEmail(res.data.email);
                setClass(res.data.classType);
                setEconomy(res.data.economyClass);
                setBusiness(res.data.businessClass);
                setAirline(res.data.airline);
                setPrice(res.data.price);
                setDepAir(res.data.startAirport);
                setFlightAir(res.data.destinationAirport);
                setDepDate(res.data.departureDate);
                setDepTime(res.data.departureTime);
                setSeat(res.data.seatNo);

            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getReservation() }, []);
    

    return (
        <div className="FlightResUpdateFormMainCont">
            <h1>Update Ticket Details</h1>
            <div className='FlightResUpdateFormCont'>
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const newTicket = {
                        firstName,
                        lastName,
                        email,
                        phoneNo,
                        passportID,
                        price 
                    };

                    axios.put(`http://localhost:8070/flightTicket/update/${flightResId}`, newTicket)
                        .then(() => {
                            alert("Ticket updated successfully");
                            navigate(`/clientDashboard/${id}/bookings/flight`);
                        }).catch((err) => {
                            alert("Error adding ticket");
                            console.log(err);
                        });
                }}>
                    <div className="form-group">
                        <label className="form-label">Flight</label>
                        <input type="text" className="form-control" value={flight} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" value={phoneNo} min="0110000000" max="0799999999" onChange={(e) => {setPhoneNo(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Passport ID</label>
                <input type="text" className="form-control" value={passportID} onChange={(e) => {setppID(e.target.value)}} required/>
              </div>
              <br/>
              <button type="submit" className="submitbtn">Update</button>
            </form>
            <br/>
            <div className='flightrestcktcont'>
              <div className='flightrestckt'>
              <center><h3>{flight}</h3>
              <h5>{airline}</h5></center><br/>
                <p>Starting Airport : {startAirport}</p>
                <p>Departure Date : {depDate} (GMT+5.30)</p>
                <p>Departure Time : {depTime} (GMT+5.30)</p>
                <p>Destination Airport : {flightAirport}</p>
                <p>Name : {firstName} {lastName}</p>
                <p>Email Address : {email}</p>
                <p>Phone Number : {phoneNo}</p>
                <p>Passport ID : {passportID}</p>
                <p>Class : {classType}</p> 
                <p>Seat : {seat}</p>               
                <br/>
                <h3>Total : {price}</h3>
                </div>
            </div>
            </div><br />
        </div>
    )
}

export default FlightResUpdateForm;