import { useState } from 'react';
import axios from 'axios';

function HotelForm(){
    const [name, setName]=useState('');
    const [location,setLocation]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [stars,setStars]=useState('');
    const [facilities,setFacilities]=useState('');
    const [images,setImages]=useState('');



    return (
        <div>
            <h1 className='text-center'>Add Hotel Content</h1>
        <div className="App">
            <form onSubmit={(e) => {
                e.preventDefault();

                const newHotel = {
                    name,
                    location,
                    price,
                    description,
                    stars,
                    facilities,
                    images
                }

                axios.post("http://localhost:8070/hotels/create", newHotel)
                    .then(() => {
                        alert("Hotel Content added successfully");
                    }).catch((err) => {
                        alert("Error adding Hotel Content");
                        console.log(err);
                    })
            }}>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Stars</label>
                    <input type="number" className="form-control" min="0" max="5"
                    onChange={(e) => {
                        setStars(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Facilities</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setFacilities(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setImages(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default HotelForm;