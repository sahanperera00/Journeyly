import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sudul/FlightUpdateForm.css';

function FinanceHotelUpdateForm() {
    const [name, setName] = useState('');
    const [buyingPrice, setBuyingPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
  
    const getUniqueHotel = () => {   
        axios.get("http://localhost:8070/hotels/" + id)
            .then((res) => {
                setName(res.data.name);
                setBuyingPrice(res.data.buyingPrice);
                setSellingPrice(res.data.sellingPrice);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getUniqueHotel() }, []);

    return (
        <div className='FlightUpdateFormMainCont'>
            <h1>Update Hotel Financial Details</h1>
            <div className="FlightUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newHotel = {
                        buyingPrice,
                        sellingPrice
                    }
                    await axios.put("http://localhost:8070/hotels/update/" + id, newHotel).then(() => {
                        alert("Hotel Details Updated And Uploaded");
                        navigate("/financeDashboard/pending/hotel");
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
                        <label className="form-label">Hotel Ticket Buying Price</label>
                        <input type="text" className="form-control" value={buyingPrice} onChange={(e) => { setBuyingPrice(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Hotel Ticket Selling Price</label>
                        <input type="text" className="form-control" value={sellingPrice} onChange={(e) => { setSellingPrice(e.target.value) }} required/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceHotelUpdateForm;