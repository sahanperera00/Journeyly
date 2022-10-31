import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sahan/DesResUpdateForm.css';

function RentalUpdateForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [startDes, setStartDes] = useState('');
    const [endDes, setEndDes] = useState('');

    const {vehicleId} = useParams();
    const { id } = useParams();
    const { rentalId } = useParams();
    const navigate = useNavigate();

    const getRental = () => {
        axios.get("http://localhost:8070/rental/" + rentalId)
            .then((res) => {
                // setDestination(res.data.desName);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPhoneNo(res.data.phoneNo);

                const date = new Date(res.data.date);
                setDate(date.toISOString().split('T')[0]);
                setTime(res.data.time);
                setStartDes(res.data.startDes);
                setEndDes(res.data.endDes);
            })
            .catch((err) => {
                alert(err);
            });
    };

    // const getVehicle = () => {
    //     axios.get("http://localhost:8070/vehicles/" + vehicleId)
    //         .then((res) => {
    //             setChildTicketSellingRate(res.data.childTicketSellingRate);
    //             setAdultTicketSellingRate(res.data.adultTicketSellingRate);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         })};

    useEffect(() => { getRental() }, []);
    // useEffect(() => { getDestination() }, []);

    return (
        <div className="DesResUpdateFormMainCont">
            <h1>Update Rental Details</h1>
            <div className='DesResUpdateFormCont'>
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const newRental = {
                        firstName,
                        lastName,
                        email,
                        phoneNo,
                        date,
                        time,
                        startDes,
                        endDes
                    };

                    axios.put(`http://localhost:8070/rental/update/${rentalId}`, newRental)
                        .then(() => {
                            alert("Rental updated successfully");
                            navigate(`/clientDashboard/${id}/bookings/taxi`);
                        }).catch((err) => {
                            alert("Error adding rental");
                            console.log(err);
                        });
                }}>
                    {/* <div className="form-group">
                        <label className="form-label">Destination</label>
                        <input type="text" className="form-control" value={destination} readOnly />
                    </div> */}
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
                        <input type="text" className="form-control" value={lastName} onChange={(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" defaultValue={date} onChange={(e) => { setDate(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Time</label>
                        <input type="time" className="form-control" value={time} onChange={(e) => { setTime(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Start Destination</label>
                        <input type="Number" className="form-control" value={adults} onChange={(e) => { setStartDes(e.target.value) }} min={0} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">End Destination</label>
                        <input type="Number" className="form-control" value={children} onChange={(e) => { setEndDes(e.target.value) }} min={0} required />
                    </div><br />
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div><br />
        </div>
    )
}

export default RentalUpdateForm;