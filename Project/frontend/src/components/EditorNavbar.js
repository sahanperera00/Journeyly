import React from "react";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="editorDash">Editor</a>
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
                    <a className="nav-link" href="desform">Attractions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="taxi">Taxi</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;