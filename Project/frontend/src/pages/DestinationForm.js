import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

function DestinationForm() {
    const [name, setName] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [location, setLocation] = useState('');
    const [extra, setExtra] = useState('');
    const [includes, setIncludes] = useState('');
    const [imageI, setImageI] = useState('');
    const [adultCost, setAdultCost] = useState('');
    const [childCost, setChildCost] = useState('');

    const navigate = useNavigate();

    return (
        <div>
            <h1 className='text-center'>Add Travel Destination</h1>
            <div className="App">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/destination/${name + imageI.name}`);
                
                    await uploadBytes(imageRef, imageI)
                    .then(() => {
                        console.log('Uploaded images');
                    }).catch((err) => {
                        console.log(err);
                    });

                    await getDownloadURL(ref(storage, `images/destination/${name + imageI.name}`))
                    .then((url) => {
                        console.log(url);

                        const newDestination = {
                            name,
                            shortDesc,
                            longDesc,
                            location,
                            extra,
                            includes,
                            images:url,
                            adultCost,
                            childCost
                        };
        
                        axios.post("http://localhost:8070/destination/create", newDestination)
                            .then(() => {
                                alert("Destination added successfully");
                                navigate('/editorDash/attractionEdit');
                            }).catch((err) => {
                                alert("Error adding destination");
                                console.log(err);
                            });

                    }).catch((err) => {
                        console.log(err);
                    });
                }}>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Short Description</label>
                        <input type="text" className="form-control" onChange={(e) => { setShortDesc(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Long Description</label>
                        <input type="text" className="form-control" onChange={(e) => { setLongDesc(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" onChange={(e) => { setLocation(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">What you need to know</label>
                        <input type="text" className="form-control" onChange={(e) => { setExtra(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">What's included</label>
                        <input type="text" className="form-control" onChange={(e) => { setIncludes(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control" onChange={(e) => { setImageI(e.target.files[0]) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Adult Cost</label>
                        <input type="Number" className="form-control" onChange={(e) => { setAdultCost(e.target.value) }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Child Cost</label>
                        <input type="Number" className="form-control" onChange={(e) => { setChildCost(e.target.value) }} required/>
                    </div><br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default DestinationForm;