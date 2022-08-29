import React from 'react';

const DestinationForm = (props) => {
    return (
        <div className="App">
            {/* <form onSubmit= {() => {}}>
                <input type="text" name="name" placeholder="Name" onChange={() => {}} /><br />
                <input type="text" name="short description" placeholder="Short description" onChange={() => {}} /><br />
                <input type="text" name="long description" placeholder="Long description" onChange={() => {}} /><br />
                <input type="text" name="location" placeholder="Location" onChange={() => {}} /><br />
                <input type="text" name="extras" placeholder="Extras" onChange={() => {}} /><br />
                <input type="text" name="include" placeholder="Include" onChange={() => {}} /><br />
                <input type="text" name="images" placeholder="Images" onChange={() => {}} /><br />
                <input type="submit" value="Add Destination" />
            </form> */}

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
    )
}

export default DestinationForm;