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

                // const date = new Date(res.data.date);
                // setDate(date.toISOString().split('T')[0]);
                // setTime(res.data.time);
                // setAdults(res.data.adults);
                // setChildren(res.data.children);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getReservation() }, []);
    function radio(value){
        if(value == "BusinessClass"){
          setPrice(business)
          setClass("Business Class")
        }
        else{
          setPrice(economy)
          setClass("Economy Class")
        }
      }
      console.log(economy)

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
                        classType,
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
              <div className="form-group">
                <label className="form-label">Class Type</label>
              {/* <select class="form-select" aria-label="Default select example" onChange={(e) => {setClass(e.target.value)}} required>
               <option value="Economy Class">Economy Class</option>
               <option value="Business Class">Business Class</option>
              </select> */}<br/>
                <input type="radio" name="cls" value="EconomyClass" onChange={(e) => {radio(e.target.value)}} />Economy Class<br/>
                <input type="radio" name="cls" value="BusinessClass" onChange={(e) => {radio(e.target.value)}} />Business Class
              </div>  
              <button type="submit" className="submitbtn">Update</button>
            </form>
            </div><br />
        </div>
    )
}

export default FlightResUpdateForm;