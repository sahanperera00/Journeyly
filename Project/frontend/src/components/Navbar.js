import React from "react";

const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="home">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="flights">Flights</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="hotels">Hotels</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="attractions">Attractions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="taxi">Taxi</a>
                    </li>
                </ul>
                </div>
                <a href="login">
                    <button className="btn btn-outline-primary" type="submit">Login</button>
                </a>
                {/* <a href="editorLogin"> */}
                <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Editor Login</button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editor Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                                <form>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="recipient-password" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                {/* </a> */}
            </div>
            </nav>
        </div>
    )
}

export default Navbar;