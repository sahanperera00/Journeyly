import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/sudul/FlightUpdateForm.css';

function FeedbackUpdateForm(){
    const [feedbacktype,setFeedbacktype]=useState('');
    const [placeofincident,setPlaceofincident]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [images, setImages] =useState('');

    const {id} = useParams();
  
    const getFeedback = () => {   
        axios.get("http://localhost:8070/feedback/"+id).then((res) => {
                const updateFeedback = {
                    feedbacktype: res.data.feedbacktype,
                    placeofincident: res.data.placeofincident,
                    phonenumber: res.data.phonenumber,
                    message: res.data.message,
                    images: res.data.images
                }
                setFeedbacktype(updateFeedback.feedbacktype);
                setPlaceofincident(updateFeedback.placeofincident);
                setPhonenumber(updateFeedback.phonenumber);
                setSubject(updateFeedback.subject);
                setMessage(updateFeedback.message);
                setImages(updateFeedback.images);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getFeedback() },[]);

    return (
        <div className='feedbackup'>
            <h1>Update Feedback Details</h1>
        <div className="feedbackup">
            <form onSubmit={async (e) => {
                e.preventDefault();

                const imageRef = ref(storage, `images/feedback/${feedbacktype + images.name}`);
        
                uploadBytes(imageRef, images)
                    .then(() => {
                        console.log('Uploaded image');
                    }).catch((err) => {
                        console.log(err);
                    });

                await getDownloadURL(ref(storage, `images/feedback/${feedbacktype + images.name}`))
                    .then((url) => {
                        console.log(url);
                        setImages(url);
                    }).catch((err) => {
                        console.log(err);
                    });  

                const newFeedback = {
                    feedbacktype,
                    placeofincident,
                    phonenumber,
                    subject,
                    message,
                    images,
                }

                axios.put("http://localhost:8070/feedback/update/"+id, newFeedback)
                    .then(() => {
                        alert("Feedback updated successfully");

                    }).catch((err) => {
                        alert(err);
                    })
            }}>

                <div className="form-group">
                <label className="form-label" id='form-label-feed'>Category</label>
                <select class="form-select" aria-label="Default select example" 
                onChange={(e) =>{ setSubject
                    (e.target.value)}} required>
                <option value="Service Quality issues">Service Quality issues</option>
                <option value="Harrasment">Harrasment</option>
                <option value="Fraud">Fraud</option>
                <option value="Other">Other</option>
                 </select>

                    </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Place of incident</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Phone Number</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setPhonenumber(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Subject</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setFeedbacktype(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Details</label>
                    <input type="text" className="ratingfeed" 
                    onChange={(e) => {
                        setPlaceofincident(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}

export default FeedbackUpdateForm;