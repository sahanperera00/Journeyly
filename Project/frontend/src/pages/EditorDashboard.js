import React from 'react';
import EditorNavBar from "../components/EditorNavbar";
import DestinationForm from "../components/DestinationForm";
import { Route, Routes } from 'react-router-dom';

function EditorDashboard() {
  return (
    <div>
      <EditorNavBar />
      <h1 className='text-center'>Editor Dashboard</h1>
      <Routes>
        <Route path="/desform" element={<DestinationForm />} />
      </Routes>
    </div>
  );
}

export default EditorDashboard;
