import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from '../pages/Home';
import EditorDashboard  from '../pages/EditorDashboard';
import DestinationForm  from '../components/DestinationForm';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/editorDash" element={<EditorDashboard />} />
                <Route path="/desform" element={<DestinationForm />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;