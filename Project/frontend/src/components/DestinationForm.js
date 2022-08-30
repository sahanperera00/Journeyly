import React from 'react';
import NavBar from "../components/Navbar";
import EditorNavBar from "../components/EditorNavbar";

const DestinationForm = (props) => {
    return (
        <div>
            <NavBar />
            <h1 className='text-center'>Destination Form</h1>
            <EditorNavBar />
        <div className="App">
            <form>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Short Description</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Long Description</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">What you need to know</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">What's included</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="text" className="form-control" />
                </div><br />
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default DestinationForm;