import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import '../styles/Madusha/VehicleUpdateForm.css';

function VehicleUpdateForm() {
    const [type, settype] = useState('');
    const [vehicleType, setvehicleType] = useState('');
    const [driverName, setdriverName] = useState('');
    const [ownerName, setownerName] = useState('');
    const [email, setemail] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [fee, setfee] = useState('');
    const [image, setImage] = useState('');

    const { id } = useParams();

    const newVehicle = () => {
        axios.get("http://localhost:8070/vehicles/" + id)
            .then((res) => {
                const updateVehicles = {
                    type: res.data.type,
                    vehicleType: res.data.vehicleType,
                    driverName: res.data.driverName,
                    ownerName: res.data.ownerName,
                    email: res.data.email,
                    phoneNo: res.data.phoneNo,
                    fee: res.data.fee,
                    image: res.data.image

                }
                settype(updateVehicles.type);
                setvehicleType(updateVehicles.vehicleType);
                setdriverName(updateVehicles.driverName);
                setownerName(updateVehicles.ownerName);
                setemail(updateVehicles.email);
                setphoneNo(updateVehicles.phoneNo);
                setfee(updateVehicles.fee);
                setImage(updateVehicles.image);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { newVehicle() }, []);

    return (
        <div className='VehicleUpdateFormMainCont'>
            <h1>Update Vehicle Details</h1>
            <div className="VehicleUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/vehicles/${ownerName + image.name}`);

                    uploadBytes(imageRef, image)
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        });

                    await getDownloadURL(ref(storage, `images/vehicles/${ownerName + image.name}`))
                        .then((url) => {
                            console.log(url);
                            setImage(url);
                        }).catch((err) => {
                            console.log(err);
                        });

                    const newVehicle = {
                        type,
                        vehicleType,
                        driverName,
                        ownerName,
                        email,
                        phoneNo,
                        fee,
                        image
                    }

                    axios.put("http://localhost:8070/vehicles/update/" + id, newVehicle)
                        .then(() => {
                            alert("vehicles updated successfully");

                        }).catch((err) => {
                            alert(err);
                        })
                }}>

                    <div className="form-group">
                        <label className="form-label">Type</label>
                        <select className="form-control">
                            <option value="Taxi">Taxi</option>
                            <option value="Rent-a-Car">Rent-a-Car</option>
                            onChange={(e) => {
                                settype(e.target.value);
                            }} required
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Vehicle Type</label>
                        <input type="text" className="form-control" value={vehicleType}
                            onChange={(e) => {
                                setvehicleType(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Driver Name</label>
                        <input type="text" className="form-control" value={driverName}
                            onChange={(e) => {
                                setdriverName(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Owner Name</label>
                        <input type="text" className="form-control" value={ownerName}
                            onChange={(e) => {
                                setownerName(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" value={phoneNo}
                            onChange={(e) => {
                                setphoneNo(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }} required />

                    </div>
                    <div className="form-group">
                        <label className="form-label">Fee</label>
                        <input type="Number" className="form-control" value={fee}
                            onChange={(e) => {
                                setfee(e.target.value);
                            }} required />
                    </div><br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default VehicleUpdateForm;
