import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    Flights,
    Hotels,
    Attractions,
    Taxis,
    Login,
    EditorDashboard,
    DestinationForm,
    SharedLayoutHome,
    SharedLayoutEditorDashboard,
    AttractionEdit,
    HotelForm,
    HotelEdit,
    FlightForm,
    FlightEdit,
    DestinationUpdateForm,
} from '../pages';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayoutHome />}>
                    <Route index element={<Home />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<Attractions />} /> 
                    <Route path="taxis" element={<Taxis />} />
                    <Route path="login" element={<Login />} />
                </Route>
                
                <Route path="/editorDash" element={<SharedLayoutEditorDashboard />}>
                    <Route index element={<EditorDashboard />} />
                    <Route path="addAttractionsForm" element={<DestinationForm />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<Attractions />} /> 
                    <Route path="taxis" element={<Taxis />} />
                    <Route path="attractionEdit" element={<AttractionEdit />} />
                    <Route path="hotelForm" element={<HotelForm/>}/>
                    <Route path="hotelEdit" element={<HotelEdit/>}/>
                    <Route path="flightForm" element={<FlightForm/>}/>
                    <Route path="flightEdit" element={<FlightEdit/>}/>
                    <Route path="destinationUpdateForm/:id" element={<DestinationUpdateForm />}/>
                </Route>
                
            </Routes>
        </Router>
    );
}

export default AppRoutes;