import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

    
function PackageUpdateForm(){
    const [name, setName] = useState('');
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');

    //identify
    const {id} = useParams();
  
    const getPackage = () => {   
        axios.get("http://localhost:8070/package/"+id)
            .then((res) => {
                const updatePackages = {
                    name: res.data.name,
                    destination: res.data.destination,
                    members: res.data.members,
                    hotel: res.data.hotel,
                    roomType: res.data.roomType,
                    vehicle: res.data.vehicle,
                    guide: res.data.guide,
                    price: res.data.price,
                    image: res.data.image
                }
                setName(updatePackages.name);
                setDestination(updatePackages.destination);
                setMembers(updatePackages.members);
                setHotel(updatePackages.hotel);
                setRoomType(updatePackages.roomType);
                setVehicle(updatePackages.vehicle);
                setGuide(updatePackages.guide);
                setPrice(updatePackages.price);
                setImage(updatePackages.image);
/*
                setName(res.data.name);
                setLocation(res.data.location);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setStars(res.data.stars);
                setFacilities(res.data.facilities);
                setImages(res.data.images);*/
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getPackage() }, []);

    return (
        <div>
            <h1 className='text-center'>Update Package</h1>
        <div className="App">
            <form onSubmit={async (e) => {
                e.preventDefault();

                const imageRef = ref(storage, `images/packages/${name + image.name}`);
        
                uploadBytes(imageRef, image)
                    .then(() => {
                        console.log('Uploaded image');
                    }).catch((err) => {
                        console.log(err);
                    });

                await getDownloadURL(ref(storage, `images/packages/${name + image.name}`))
                    .then((url) => {
                        console.log(url);
                        setImage(url);
                    }).catch((err) => {
                        console.log(err);
                    });

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

                axios.put("http://localhost:8070/destination/update/"+id, newPackage)
                    .then(() => {
                        alert("Destination updated successfully");

                    }).catch((err) => {
                        alert(err);
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

export default PackageUpdateForm;