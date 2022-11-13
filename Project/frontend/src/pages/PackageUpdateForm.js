import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import '../styles/praweena/PackageUpdateForm.css';


function PackageUpdateForm() {
    const [name, setName] = useState('');
    const [destination, setDestination]=useState('');
    const [members,setMembers]=useState('');
    const [hotel,setHotel]=useState('');
    const [roomType,setRoomType]=useState('');
    const [vehicle,setVehicle]=useState('');
    const [guide,setGuide]=useState('');
    const [price,setPrice]=useState('');
    const [image, setImage] = useState('');

    const {id} = useParams();
  
    const newPackage = () => {   
        axios.get("http://localhost:8070/packages/"+id) //get id
            .then((res) => {
             
                setName(res.data.name);
                setDestination(res.data.destination);
                setMembers(res.data.members);
                setHotel(res.data.hotel);
                setRoomType(res.data.roomType);
                setVehicle(res.data.vehicle);
                setGuide(res.data.guide);
                setPrice(res.data.price);
                setImage(res.data.image);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { newPackage() },[]);

    return (
        <div className='PackageUpdateFormMainCont'>
            <h1>Update Package Details </h1>
        <div className="PackageUpdateForm">
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

                axios.put("http://localhost:8070/packages/update/"+id, newPackage)
                    .then(() => {
                        alert("Package updated successfully");

                    }).catch((err) => {
                        alert(err);
                    })
                }).catch((err) => {
                    console.log(err);
                });
            }}>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Destination</label>
                    <input type="text" className="form-control" value={destination}
                    onChange={(e) => {
                        setDestination(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Members</label>
                    <input type="text" className="form-control" value={members}
                    onChange={(e) => {
                        setMembers(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Hotel</label>
                    <input type="text" className="form-control" value={hotel}
                    onChange={(e) => {
                        setHotel(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Room Type</label>
                    <input type="text" className="form-control" value={roomType}
                    onChange={(e) => {
                        setRoomType(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Vehicle</label>
                    <input type="text" className="form-control" value={vehicle}
                    onChange={(e) => {
                        setVehicle(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Image Link</label>
                    <input
                 type="text"
                 className="form-control"
                value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
              }}
              required/>
                </div>
              {/*  <div className="form-group">
                    <label className="form-label">Guide</label>
                    <input type="text" className="form-control" value={guide}
                    onChange={(e) => {
                        setGuide(e.target.value);
                    }} />
                </div>*/}
                 <div className="form-group">
            <label className="form-label">Guide</label>
            <select
              className="form-control"
              onChange={(e) => {
                setGuide(e.target.value);
              }}
              required
            >

              
              <option value="with">with</option>
              <option value="without">without</option>
              
            </select>
          </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="Number" className="form-control" value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }} required/>
                </div><br />
                <button type="submit" className="submitbtn">
                  Update
                </button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default PackageUpdateForm;
