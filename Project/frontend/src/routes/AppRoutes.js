import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from '../pages/Home';
import EditorDashboard  from '../pages/EditorDashboard';
import DestinationForm  from '../components/DestinationForm';
import NavBar from "../components/Navbar";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Attractions from "../pages/Attractions";
import Taxis from "../pages/Taxis";
import Login from "../pages/Login";

function AppRoutes() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/taxis" element={<Taxis />} />
                <Route path="/login" element={<Login />} />
                <Route path="/editorDash" element={<EditorDashboard />} />
                <Route path="/desform" element={<DestinationForm />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;