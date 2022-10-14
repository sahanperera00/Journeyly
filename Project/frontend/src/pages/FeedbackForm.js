import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/ranmina/Feedback.css'


function FeedbackForm(){
    const [phonenumber,setphonenumber]=useState('');
    const [message,setmessage]=useState('');
    const [feedbacktype,setfeedbacktype]=useState('');
    const [rating,setrating]=useState('');
    const [subject,setsubject]=useState('');
    // const [images, setImages] = useState('');



    return (
        <div>
            <h1 className='feedText'>Feedback Management System</h1>
           <div> <button type="submit" className="btn btn-dark">Sign Out</button></div>
           
            

        <div className="App">
         <h2>Feedback Form</h2>  
            
            
                <form onSubmit={async (e) => {
                    e.preventDefault();
    
        
                const newFeedback = {
                    subject,
                    message,
                    phonenumber,
                    feedbacktype,
                    rating,
                }

                axios.post("http://localhost:8070/feedback/create", newFeedback)
                    .then(() => {
                        alert("Feedback Form submitted succesfully");
                    }).catch((err) => {
                        alert("Error adding Flight Content");
                        console.log(err);
                    })
               
                
            }}>

                <div className="form-group">
                <label className="form-label" id='form-label-feed'>Category</label>
                <select class="form-select" aria-label="Default select example" 
                onChange={(e) =>{ setsubject
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
                        setmessage(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Phone Number</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setphonenumber(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Subject</label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setfeedbacktype(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'>Details</label>
                    <input type="text" className="ratingfeed" 
                    onChange={(e) => {
                        setrating(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default FeedbackForm;