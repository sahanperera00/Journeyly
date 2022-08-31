import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    Flights,
    Hotels,
    Attractions,
    Taxis,
    Login,
    EditorDashboard,
    DestinationForm
} from '../pages';
import NavBar from '../components/Navbar';
import EditorNavBar from '../components/EditorNavbar';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><NavBar /><Home /></>} />
                <Route path="/flights" element={<><NavBar /><Flights /></>} />
                <Route path="/hotels" element={<><NavBar /><Hotels /></>} />
                <Route path="/attractions" element={<><NavBar /><Attractions /></>} /> 
                <Route path="/taxis" element={<><NavBar /><Taxis /></>} />
                <Route path="/login" element={<><NavBar /><Login /></>} />

                <Route path="/editorDash" element={<><EditorNavBar /><EditorDashboard /></>} />
                <Route path="/addAttractionsForm" element={<><EditorNavBar /><DestinationForm /></>} />
                
            </Routes>
        </Router>
    );
}

export default AppRoutes;