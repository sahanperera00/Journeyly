import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/praweena/PackageResUpdateForm.css'



function PackageReservationUpdateForm({}) {
    const {id} = useParams();
  const { packageReservationId } = useParams();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
 // const { packageReservationId } = useParams();
    

  
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
        <div className="PackageResUpdateFormMainCont">
            <h1>Update Package Reservation Details</h1>
            <div className='PackageResUpdateFormCont'>
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
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" value={date} onChange={(e) => { setDate(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"pattern="[a-z0-9]+@+[a-z]+.com" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" value={phoneNo} min ="100000000" max="790000000" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
              <br/>
              <button type="submit" className="submitbtn">Submit</button>
            </form>
            </div><br />
        </div>
    )
}

export default PackageReservationUpdateForm;