import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DestinationForm from "./components/DestinationForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/editor" element={<DestinationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
