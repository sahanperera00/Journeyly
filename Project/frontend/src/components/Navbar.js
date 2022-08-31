import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex">
                <Link to={"/"} className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/flights"} className="nav-link">Flights</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/hotels"} className="nav-link">Hotels</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/attractions"} className="nav-link">Attractions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/taxi"} className="nav-link">Taxi</Link>
                        </li>
                    </ul>
                </div>
                
                <Link to={"/login"} className="btn btn-outline-dark">Login</Link>
                
                <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Editor Login</button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editor Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                                <form onSubmit={() => {}}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message-text" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="recipient-password" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <a href="editorDash">
                                            <button type="button" className="btn btn-dark">Login</button>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;