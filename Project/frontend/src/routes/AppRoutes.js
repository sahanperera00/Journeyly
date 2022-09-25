import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    Flights,
    Hotels,
    Attractions,
    Taxis,
    Vehicles,
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
    PackagesEdit,
    PackageUpdateForm,
    HotelUpdateForm,
    HotelPreview,
    RegistrationForm,
    SharedLayoutDestination,
    DesPreview,
    FlightUpdateForm,
    VehicleUpdateForm,
    VehicleForm,
    VehiclesEdit,
    UserProfile,
    ProfileUpdateForm,
    ClientDashboard,
    UserDashboard,
    ClientProfile,
    Bookings,
    Feedback,
    Payments
} from '../pages';
import Tester from '../pages/tester.js'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='tester' element={<Tester/>}/>
                <Route path="/" element={<SharedLayoutHome />}>
                    <Route index element={<Home />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<SharedLayoutDestination />}>
                        <Route index element={<Attractions />} />
                        <Route path=":id" element={<DesPreview />} />
                    </Route>
                    <Route path="taxis" element={<Taxis />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path = "registration" element={<RegistrationForm />} />
                    <Route path='hotelPreview/:id' element={<HotelPreview/>}/>
                </Route>
                
                <Route path="/editorDash" element={<SharedLayoutEditorDashboard />}>
                    <Route index element={<EditorDashboard />} />
                    <Route path="addAttractionsForm" element={<DestinationForm />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="attractions" element={<Attractions />} />
                    <Route path="vehicles" element={<Vehicles />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="attractionEdit" element={<AttractionEdit />} />
                    <Route path="hotelForm" element={<HotelForm/>}/>
                    <Route path="hotelEdit" element={<HotelEdit/>}/>
                    <Route path="flightForm" element={<FlightForm/>}/>
                    <Route path="flightEdit" element={<FlightEdit/>}/>
                    <Route path="destinationUpdateForm/:id" element={<DestinationUpdateForm />}/>
                    <Route path="flightUpdateForm/:id" element={<FlightUpdateForm />}/>
                    <Route path="packageForm" element={<PackageForm/>}/>
                    <Route path="packagesEdit" element={<PackagesEdit/>}/>
                    <Route path="packageUpdateForm/:id" element={<PackageUpdateForm/>}/>
                    <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm/>}/>
                    <Route path="vehicleForm" element={<VehicleForm/>}/>
                    <Route path="vehiclesEdit" element={<VehiclesEdit/>}/>
                    <Route path="vehicleUpdateForm/:id" element={<VehicleUpdateForm/>}/>
                </Route>
                
                <Route path="/ClientDashboard/:id" element={<ClientDashboard/>}>
                    <Route index element={<UserProfile/>}/>
                    <Route path="updateProfile" element={<ProfileUpdateForm/>}/>
                </Route>

                <Route path="/clientDashboard/:id" element={<ClientDashboard/>}>
                    <Route index element={<ClientProfile/>}/>
                    <Route path="bookings" element={<Bookings/>}/>
                    <Route path="feedback" element={<Feedback/>}/>
                    <Route path="payments" element={<Payments/>}/>
                </Route>

            </Routes>
        </Router>
    );
}

export default AppRoutes;