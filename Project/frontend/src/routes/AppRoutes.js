import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from '../pages/Home';
import EditorDashboard  from '../pages/EditorDashboard';
import NavBar from "../components/Navbar";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Attractions from "../pages/Attractions";
import Taxis from "../pages/Taxis";
import Login from "../pages/Login";
import EditorNavBar from "../components/EditorNavbar";
import DestinationForm from "../components/DestinationForm";

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

                <Route path="/editorDash" element={<EditorNavBar />}>
                    <Route path="/editorDash" element={<EditorDashboard />} />
                    <Route path="/editorDash" element={<DestinationForm />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;