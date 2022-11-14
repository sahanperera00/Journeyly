import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/ranmina/Feedback.css';
import { useNavigate } from 'react-router-dom';

function FeedbackUpdateForm(){
    const [feedbacktype,setFeedbacktype]=useState('');
    const [placeofincident,setPlaceofincident]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [image, setImage] =useState('');

    const {id} = useParams();
    const navigate = useNavigate();
  
    const getFeedback = () => {   
        axios.get("http://localhost:8070/feedback/"+id).then((res) => {
                const updateFeedback = {
                    feedbacktype: res.data.feedbacktype,
                    placeofincident: res.data.placeofincident,
                    phonenumber: res.data.phonenumber,
                    message: res.data.message,
                    subject: res.data.subject,
                    image: res.data.image
                }
                setFeedbacktype(updateFeedback.feedbacktype);
                setPlaceofincident(updateFeedback.placeofincident);
                setPhonenumber(updateFeedback.phonenumber);
                setSubject(updateFeedback.subject);
                setMessage(updateFeedback.message);
                setImage(updateFeedback.image);
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getFeedback() },[]);

    return (
        <div className='FeedbackMainCont'>
            <h1>Update Feedback Details</h1>
        <div className="feedbackCont">
            <form className = 'feedback' onSubmit={async (e) => {
                e.preventDefault();

                const imageRef = ref(storage, `image/feedback/${feedbacktype + image.name}`);
        
                uploadBytes(imageRef, image)
                    .then(() => {
                        console.log('Uploaded image');
                    }).catch((err) => {
                        console.log(err);
                    });

                await getDownloadURL(ref(storage, `image/feedback/${feedbacktype + image.name}`))
                    .then((url) => {
                        console.log(url);
                        setImage(url);
                    }).catch((err) => {
                        console.log(err);
                    });  

                const newFeedback = {
                    feedbacktype,
                    placeofincident,
                    phonenumber,
                    subject,
                    message,
                    image,
                }

                axios.put("http://localhost:8070/feedback/update/"+id, newFeedback)
                    .then(() => {
                        alert("Feedback updated successfully");
                        navigate(`/clientDashboard/${id}/feedback`);

                    }).catch((err) => {
                        alert(err);
                    })
            }}>

                <div className="form-group">
                <label className="form-label" id='form-label-feed'>Category</label>
                <select class="form-select" aria-label="Default select example" 
                onChange={(e) =>{ setFeedbacktype
                    (e.target.value)}} required>
                <option value="Service Quality issues">Service Quality issues</option>
                <option value="Harrasment">Harrasment</option>
                <option value="Fraud">Fraud</option>
                <option value="Other">Other</option>
                 </select>

                    </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Place of incident</label>
                    <input type="text" className="form-control" value={placeofincident}
                    onChange={(e) => {
                        setPlaceofincident(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Phone Number</label>
                    <input type="number" className="form-control" value={phonenumber}
                    onChange={(e) => {
                        setPhonenumber(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Subject</label>
                    <input type="text" className="form-control" value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Details</label>
                    <textarea rows={3} type="text" className="form-control"  value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Update</button><br /><br />
            </form>
        </div>
        </div>
    )
}

export default FeedbackUpdateForm;