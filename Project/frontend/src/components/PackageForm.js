import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


function PackageForm(){
    const [name, setName] = useState('');
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');



    return (
        <div>
            <h1 className='text-center'>Add Package Detail</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();
//image
                const imageRef = ref(storage, `images/packages/${name + image.name}`);
             
                uploadBytes(imageRef, image)
                .then(() => {
                    console.log('Uploaded image');
                }).catch((err) => {
                    console.log(err);
                })

                getDownloadURL(ref(storage, `images/packages/${name + image.name}`))
                .then((url) => {
                    console.log(url);
                    setImage(url);
                }).catch((err) => {
                    console.log(err);
                })
//
                const newPackage = {
                    name,
                    destination,
                    members,
                    hotel,
                    roomType,
                    vehicle,
                    guide,
                    price,
                    image
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
                    <label className="form-label">Package Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setName(e.target.value);
                    }} required/>
                </div>

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

                <div className="form-group">
                    <label className="form-label">Images</label>
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


export default PackageForm;