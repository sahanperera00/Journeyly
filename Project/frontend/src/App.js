import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import DestinationForm from "./components/DestinationForm";
import EditorDashboard from "./pages/EditorDashboard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/editor" element={<DestinationForm />} /> */}
          <Route path="/editor" element={<EditorDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
