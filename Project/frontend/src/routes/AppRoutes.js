import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    Flights,
    Hotels,
    Attractions,
    Taxis,
    Login,
    Packages,
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
    PackageForm,
    HotelUpdateForm,
    RegistrationForm
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
                    <Route path="packages" element={<Packages />} />
                    <Route path="login" element={<Login />} />
                    <Route path = "registration" element={<RegistrationForm />} />
                </Route>
                
                <Route path="/editorDash" element={<SharedLayoutEditorDashboard />}>
                    <Route index element={<EditorDashboard />} />
                    <Route path="addAttractionsForm" element={<DestinationForm />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<Attractions />} /> 
                    <Route path="taxis" element={<Taxis />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="attractionEdit" element={<AttractionEdit />} />
                    <Route path="hotelForm" element={<HotelForm/>}/>
                    <Route path="hotelEdit" element={<HotelEdit/>}/>
                    <Route path="flightForm" element={<FlightForm/>}/>
                    <Route path="flightEdit" element={<FlightEdit/>}/>
                    <Route path="destinationUpdateForm/:id" element={<DestinationUpdateForm />}/>
                    <Route path="PackageForm" element={<PackageForm/>}/>
                    <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm/>}/>
                </Route>
                
            </Routes>
        </Router>
    );
}

export default AppRoutes;