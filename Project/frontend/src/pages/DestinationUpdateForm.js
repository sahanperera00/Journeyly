import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function DestinationUpdateForm() {
    const [name, setName] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [location, setLocation] = useState('');
    const [extra, setExtra] = useState('');
    const [includes, setIncludes] = useState('');
    const [imageI, setImageI] = useState('');
    const [images, setImages] = useState('');
    const [adultCost, setAdultCost] = useState('');
    const [childCost, setChildCost] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
  
    const getDestination = () => {   
        axios.get("http://localhost:8070/destination/" + id)
            .then((res) => {
                setName(res.data.name);
                setShortDesc(res.data.shortDesc);
                setLongDesc(res.data.longDesc);
                setLocation(res.data.location);
                setExtra(res.data.extra);
                setIncludes(res.data.includes);
                setImages(res.data.images);
                setAdultCost(res.data.adultCost);
                setChildCost(res.data.childCost);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getDestination() }, []);

    return (
        <div>
            <h1 className='text-center'>Update Travel Destination</h1>
            <div className="App">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/destination/${name + imageI.name}`);
            
                    uploadBytes(imageRef, imageI)
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        });

                    await getDownloadURL(ref(storage, `images/destination/${name + imageI.name}`))
                        .then((url) => {
                            console.log(url);
                            setImages(url);
                        }).catch((err) => {
                            console.log(err);
                        });

                    const newDestination = {
                        name,
                        shortDesc,
                        longDesc,
                        location,
                        extra,
                        includes,
                        images,
                        adultCost,
                        childCost
                    }

                    axios.put("http://localhost:8070/destination/update/"+id, newDestination)
                        .then(() => {
                            alert("Destination updated successfully");

                        }).catch((err) => {
                            alert(err);
                        })
                }}>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Short Description</label>
                        <input type="text" className="form-control" value={shortDesc}
                        onChange={(e) => {
                            setShortDesc(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Long Description</label>
                        <input type="text" className="form-control" value={longDesc}
                        onChange={(e) => {
                            setLongDesc(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">What you need to know</label>
                        <input type="text" className="form-control" value={extra}
                        onChange={(e) => {
                            setExtra(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">What's included</label>
                        <input type="text" className="form-control" value={includes}
                        onChange={(e) => {
                            setIncludes(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control" 
                        onChange={(e) => {
                            setImageI(e.target.files[0]);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Adult Cost</label>
                        <input type="Number" className="form-control" value={adultCost}
                        onChange={(e) => {
                            setAdultCost(e.target.value);
                        }} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Child Cost</label>
                        <input type="Number" className="form-control" value={childCost}
                        onChange={(e) => {
                            setChildCost(e.target.value);
                        }} required/>
                    </div><br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default DestinationUpdateForm;