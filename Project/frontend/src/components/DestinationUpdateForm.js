import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DestinationUpdateForm() {
    const [name, setName] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [location, setLocation] = useState('');
    const [extra, setExtra] = useState('');
    const [includes, setIncludes] = useState('');
    const [images, setImages] = useState('');
    const [adultCost, setAdultCost] = useState('');
    const [childCost, setChildCost] = useState('');

    const {id} = useParams();

    const getDestination = () => {
        axios.get("http://localhost:8070/destination/"+id)
            .then((res) => {
                const updateDestination = {
                    name: res.data.name,
                    shortDesc: res.data.shortDesc,
                    longDesc: res.data.longDesc,
                    location: res.data.location,
                    extra: res.data.extra,
                    includes: res.data.includes,
                    images: res.data.images,
                    adultCost: res.data.adultCost,
                    childCost: res.data.childCost
                }
                setName(updateDestination.name);
                setShortDesc(updateDestination.shortDesc);
                setLongDesc(updateDestination.longDesc);
                setLocation(updateDestination.location);
                setExtra(updateDestination.extra);
                setIncludes(updateDestination.includes);
                setImages(updateDestination.images);
                setAdultCost(updateDestination.adultCost);
                setChildCost(updateDestination.childCost);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    useEffect(() => getDestination(), []);

    return (
        <div>
            <h1 className='text-center'>Update Travel Destination</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();

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
                    <input type="text" className="form-control" value={images}
                    onChange={(e) => {
                        setImages(e.target.value);
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