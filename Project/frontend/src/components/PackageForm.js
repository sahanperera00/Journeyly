import { useState } from 'react';
import axios from 'axios';

function PackageForm(){
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');



    return (
        <div>
            <h1 className='text-center'>Add Package Detail</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();

                const newPackage = {
                    destination,
                    members,
                    hotel,
                    roomType,
                    vehicle,
                    guide,
                    price
                }

                axios.post("http://localhost:8070/packages/create", newPackage)
                    .then(() => {
                        alert("Package Content added successfully");
                    }).catch((err) => {
                        alert("Error adding Package Content");
                        console.log(err);
                    })
            }}>

                <div className="form-group">
                    <label className="form-label">destination</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setDestination(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">members</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setMembers(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">hotel</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setHotel(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label className="form-label">roomType</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setRoomType(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">vehicle</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setVehicle(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label className="form-label">guide</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setGuide(e.target.value);
                    }} />
                </div>
                
                <div className="form-group">
                    <label className="form-label">price</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default PackageForm;