import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import '../styles/Madusha/VehicleForm.css';


function VehicleForm(){
    const [type, settype] = useState('');
    const [vehicleType, setvehicleType]=useState('');
    const [driverName,setdriverName]=useState('');
    const [ownerName,setownerName]=useState('');
    const [email,setemail]=useState('');
    const [phoneNo,setphoneNo]=useState('');
    const [fee,setfee]=useState('');
    const [image,setImage]=useState('');
    


    return (
        <div className='VehicleFormMainCont'>
            <h1>Add Vehicle Details</h1>
        <div className="VehicleFormCont">
            <br/>
            <form onSubmit={(e) => {
                e.preventDefault();
//image
                const imageRef = ref(storage, `images/vehicles/${ownerName + image.name}`);
             
                uploadBytes(imageRef, image)
                .then(() => {
                    console.log('Uploaded image');
                }).catch((err) => {
                    console.log(err);
                })

                getDownloadURL(ref(storage, `images/vehicles/${ownerName + image.name}`))
                .then((url) => {
                    console.log(url);
                    setImage(url);
                }).catch((err) => {
                    console.log(err);
                })
//
                const newVehicle= {
                    type,
                    vehicleType,
                    driverName,
                    ownerName,
                    email,
                    phoneNo,
                    fee,
                    image
              
                }

                axios.post("http://localhost:8070/vehicles/create", newVehicle)
                    .then(() => {
                        alert("Vehicle Content added successfully");
                    }).catch((err) => {
                        alert("Error adding Vehicle Content");
                        console.log(err);
                    })
            }}>


                <div className="form-group">
                    <label className="form-label">Enter Type Of Service</label>
                    <select className="form-control" >
                        <option value = "Taxi">Taxi</option>
                        <option value = "Rent-a-Car">Rent-a-Car</option>
                    onChange={(e) => {
                        settype(e.target.value);
                    }} required

                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Vehicle Type</label>
                    <input type = "text" className="form-control" 
                    onChange={(e) => {
                        setvehicleType(e.target.value);
                    }} required />
                </div>

                <div className="form-group">
                    <label className="form-label">Driver Name </label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setdriverName(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">Owner Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setownerName(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setemail(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setphoneNo(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label className="form-label">Fee</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setfee(e.target.value);
                    }} />
                </div>
                
                

                <div className="form-group">
                    <label className="form-label">Add Image</label>
                    <input type="file" className="form-control" 
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                    }} required/>
                </div>

                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default VehicleForm;
