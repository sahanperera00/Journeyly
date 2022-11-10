import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";



function InvoiceForm(){
    const [fName,setfNamer]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [Type,setType]=useState('');
    const [price,setsprice]=useState('');
    const [additonalaNote,setadditonalaNote]=useState('');

    // const [images, setImages] = useState('');



    return (
        <div>
            <h1 className='feedText'>Invoice</h1>
           
            

        <div className="App">
            
            
                <form onSubmit={async (e) => {
                    e.preventDefault();
    
        
                const newInvoice = {
                    fName,
                    email,
                    phone,
                    Type,
                    price,
                    additonalaNote,

                }

                axios.post("http://localhost:8070/invoice/create", newInvoice)
                    .then(() => {
                        alert("Invoice succesfull");
                    }).catch((err) => {
                        alert("Error");
                        console.log(err);
                    })
               
                
            }}>

                <div className="form-group">
                    <label className="form-label" id='form-label-feed'><b>Full Name</b></label>
                    <input type="select" className="form-control" 
                    onChange={(e) => {
                        setfNamer(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'><b>Email</b></label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setemail(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'><b>Phone Number</b></label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setphone(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" id='form-label-feed'><b>Type (Flights/Taxis/Packages)</b></label>
                    <input type="text" className="form-control" 
                    onChange={(e) => {
                        setType(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label class="formlabel" className="form-label" id='form-label-feed'><b>Price</b></label>
                    <input type="number" className="ratingfeed" 
                    onChange={(e) => {
                        setsprice(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label class="formlabel" className="form-label" id='form-label-feed'><b>Additional Note</b></label>
                    <input type="text" className="ratingfeed" 
                    onChange={(e) => {
                        setadditonalaNote(e.target.value);
                    }} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default InvoiceForm;