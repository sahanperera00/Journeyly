import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/praweena/PackageForm.css'



function PackageReservationUpdateForm({}) {
    const {id} = useParams();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
  const { packageReservationId } = useParams();
    

  
    const navigate = useNavigate();

    const getpackageReservation = () => {
        axios.get("http://localhost:8070/packageReservation/" + packageReservationId)
            .then((res) => {
                setName(res.data.name);
                setDate(res.data.date);
                setEmail(res.data.email);
                setphoneNo(res.data.phoneNo);
           
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getpackageReservation() }, []);

    return (
        <div className="#">
            <h1>Update Package Details</h1>
            <div className='#'>
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const newBook = {
                        name,
                        date,
                        email,
                        phoneNo,
                    };

                    axios.put(`http://localhost:8070/packageReservation/update/${packageReservationId}`, newBook)
                        .then(() => {
                            alert("Package updated successfully");
                            navigate(`/clientDashboard/${id}/bookings/package`);
                        }).catch((err) => {
                            alert("Error adding Reservation");
                            console.log(err);
                        });
                }}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" value={date} onChange={(e) => { setDate(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" value={phoneNo} onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
              
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div><br />
        </div>
    )
}

export default PackageReservationUpdateForm;