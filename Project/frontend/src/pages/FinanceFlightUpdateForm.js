import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sudul/FlightUpdateForm.css';

function FinanceFlightUpdateForm() {
    const [name, setName] = useState('');
    const [economyClass, setEconomy] = useState('');
    const [businessClass, setBusiness] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
  
    const getUniqueFlight = () => {   
        axios.get("http://localhost:8070/flights/" + id)
            .then((res) => {
                setName(res.data.name);
                setEconomy(res.data.economyClass);
                setBusiness(res.data.businessClass);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getUniqueFlight() }, []);

    return (
        <div className='FlightUpdateFormMainCont'>
            <h1>Update Flight Financial Details</h1>
            <div className="FlightUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newFlight = {
                        economyClass,
                        businessClass
                    }
                    await axios.put("http://localhost:8070/flights/update/" + id, newFlight).then(() => {
                        alert("Flight Updated");
                        navigate("/financeDashboard/pending/flight");
                    }).catch((err) => {
                        alert(err);
                    })
                }}>

                    {/* await getDownloadURL(ref(storage, `images/flight/${name + imageI.name}`))
                        .then((url) => {
                            console.log(url);

                            
                        }).catch((err) => {
                            console.log(err);
                            const newFlight = {
                                name,
                                shortDesc,
                                longDesc,
                                location,
                                extra,
                                includes,
                                images:url,
                            };

                            axios.put("http://localhost:8070/flight/update/" + id, newFlight)
                                .then(() => {
                                    alert("Flight updated successfully");
                                    navigate('/editorDashboard/editorWebContent/flight');
                                }).catch((err) => {
                                    alert(err);
                                })
                        });
                    }}> */}

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name}  readOnly/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Economy Class Ticket Price</label>
                        <input type="text" className="form-control" value={economyClass} onChange={(e) => { setEconomy(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Business Class Ticket Price</label>
                        <input type="text" className="form-control" value={businessClass} onChange={(e) => { setBusiness(e.target.value) }} required/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceFlightUpdateForm;