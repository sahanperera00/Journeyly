import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditorDashboard from '../pages/EditorDashboard';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EditorDashboard />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;