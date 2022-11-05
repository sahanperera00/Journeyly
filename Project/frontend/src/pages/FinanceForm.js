import { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function FinanceForm(){
    const [pkgType,Pkgtype]=useState('');
    const [expDate,setExpDate]=useState('');
    const [price,setPrice]=useState('');
    const [profit,setProfit]=useState('');
    const [finalPrice,setFinalPrice]=useState('');
    // const [images, setImages] = useState('');



    return (
        <div>
            <h1 className='text-center'>ADD FINANCE CONTENT</h1>
        <div className="App">
            
                <form onSubmit={async (e) => {
                    e.preventDefault();
    
                    

                const newFinanceForm = {
                    pkgType,
                    expDate,
                    price,
                    profit,
                    finalPrice,}
            
                
                

                axios.post("http://localhost:8070/finance/create", newFinanceForm)
                    .then(() => {
                        alert("Flight Content added successfully");
                    }).catch((err) => {
                        alert("Error adding Flight Content");
                        console.log(err);
                    })
              
                
            }}>

                <div className="form-group">
                    <label className="form-label">Package Type</label>

              <select class="form-select" aria-label="Default select example" onChange={(e) => {Pkgtype(e.target.value)}} required>

               <option value="Flight">Flight</option>

               <option value="Hotel">Hotel</option>
               
               <option value="Attractions">Attractions</option>

               <option value="Taxi">Taxi</option>
               

              </select>

              </div>
                <div className="form-group">
                    <label className="form-label">Expire Date</label>
                    <input type="date" className="form-control" 
                    onChange={(e) => {
                        setExpDate(e.target.value);
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
                    <label className="form-label">Profit</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setProfit(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Final Price</label>
                    <input type="number" className="form-control" 
                    onChange={(e) => {
                        setFinalPrice(e.target.value);
                    }} required/>
                </div>
               
                <br />
                <button type="submit" className="btn btn-dark">Submit</button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default FinanceForm;