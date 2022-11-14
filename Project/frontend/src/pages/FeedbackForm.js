import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import '../styles/ranmina/Feedback.css'
import { useNavigate } from 'react-router-dom';


function FeedbackForm(){
    const [feedbacktype,setfeedbacktype]=useState('');
    const [placeofincident,setplaceofincident]=useState('');
    const [phonenumber,setphonenumber]=useState('');
    const [subject,setsubject]=useState('');
    const [message,setmessage]=useState('');
    const [image, setimage] =useState('');
    const navigate = useNavigate();


    return (
        <div className='FeedbackMainCont'>
            <h1>Feedback Management System</h1>
            <div className="feedbackCont">
                <br />
                <form class= "feedback"onSubmit={async(e) => {
                    e.preventDefault();
                    //image
                    const imageRef = ref(storage, `image/feedback/${feedbacktype + image.name}`);

                    await uploadBytes(imageRef, image) //uploads image to the DataBase
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        })

                    await getDownloadURL(ref(storage, `image/feedback/${feedbacktype + image.name}`))
                        .then((url) => {
                            console.log(url);
                       
                    const newFeedback = {
                                feedbacktype,
                                placeofincident,
                                phonenumber,
                                subject,
                                message,
                                image :url
                    }

                    axios.post("http://localhost:8070/feedback/create", newFeedback)
                        .then(() => {
                            alert("Feedback Form submitted succesfully");
                            navigate(`/clientDashboard/${sessionStorage.getItem("ID")}/feedback`);
                        }).catch((err) => {
                            alert("Error adding feedback Content");
                            console.log(err);
                        })
                    }).catch((err) => {
                        console.log(err);
                    })
                }}>

<div className="form-group">
                <label className="form-label" id='form-label-feed'>Category</label>
                <select class="form-select" aria-label="Default select example" 
                onChange={(e) =>{ setfeedbacktype
                    (e.target.value)}} required>
                <option value="Service Quality issues">Service Quality issues</option>
                <option value="Harrasment">Harrasment</option>
                <option value="Fraud">Fraud</option>
                <option value="Other">Other</option>
                 </select>

                    </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed' >Place of incident</label>
                    <input type="text" className="form-control"  placeholder="Enter place of Incident" 
                    onChange={(e) => {
                        setplaceofincident(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Phone Number</label>
                    <input type="number" className="form-control" min ="100000000" max="790000000" placeholder="Enter phone Number" 
                    onChange={(e) => {
                        setphonenumber(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Subject</label>
                    <input type="text" className="form-control"  placeholder="Enter Subject" 
                    onChange={(e) => {
                        setsubject(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Details</label><br></br>
                    <textarea rows={3} type="text" className="form-control"  placeholder="Enter Details........" 
                    onChange={(e) => {
                        setmessage(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                        <label className="form-label">Add Image(Optional)</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setimage(e.target.files[0]);
                            }}  />
                    </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
      
        </div>
    )
}


export default FeedbackForm;