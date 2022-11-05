import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/leo/HotelForm.css';

function HotelForm() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    // const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stars, setStars] = useState('');
    const [facilities, setFacilities] = useState('');
    const [images, setImages] = useState('');



    return (
        <div className='HotelFormMainCont'>
            <h1>Add Hotel Content</h1>
            <div className="HotelFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/hotel/${name + images.name}`); // Stores the reference of the image

                    await uploadBytes(imageRef, images).then(() => {  //uploads the image to the firebase DB
                        console.log('Uploaded Images');
                    }).catch((err) => {
                        console.log(err);
                    })

                    await getDownloadURL(ref(storage, `images/hotel/${name + images.name}`))   //gets the 
                        .then((url) => {
                            console.log(url);

                            const newHotel = {
                                name,
                                location,
                                // price,
                                description,
                                stars,
                                facilities,
                                images: url
                            }

                            axios.post("http://localhost:8070/hotels/create", newHotel)
                                .then(() => {
                                    alert("Hotel Content added successfully");
                                }).catch((err) => {
                                    alert("Error adding Hotel Content");
                                    console.log(err);
                                })
                        }).catch((err) => {
                            console.log(err);
                        })
                }}>


                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control"
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }} required />
                    </div>
                    {/* <div className="form-group">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }} required />
                    </div> */}
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea rows={3} type="text" className="form-control"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Stars</label>
                        <input type="number" className="form-control" min="0" max="5"
                            onChange={(e) => {
                                setStars(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Facilities</label>
                        <textarea rows={3} type="text" className="form-control"
                            onChange={(e) => {
                                setFacilities(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setImages(e.target.files[0]);
                            }} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default HotelForm;