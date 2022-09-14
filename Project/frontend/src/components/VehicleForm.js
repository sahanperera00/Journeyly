import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


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
        <div>
            <h1 className='text-center'>Add Vehicle Details</h1>
        <div className="App">
            <br/>
            <form onSubmit={(e) => {
                e.preventDefault();
//image
                const imageRef = ref(storage, `images/vehicles/${name + image.name}`);
             
                uploadBytes(imageRef, image)
                .then(() => {
                    console.log('Uploaded image');
                }).catch((err) => {
                    console.log(err);
                })

                getDownloadURL(ref(storage, `images/vehicles/${name + image.name}`))
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
                    <label className="form-label">Enter Type Of  Service</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        settype(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">vehicleType</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setvehicleType(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">driverName </label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setdriverName(e.target.value);
                    }} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">ownerName</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setownerName(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label className="form-label">email</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setemail(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">phoneNo</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setphoneNo(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label className="form-label">fee</label>
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