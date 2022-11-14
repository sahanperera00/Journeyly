import Button from "react-bootstrap/esm/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  FlightPreview,
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
  UserDashboard,
  UserProfile,
  FinanceForm,
  ClientDashboard,
  ProfileUpdateForm,
  Bookings,
  Feedback,
  Payments,
  DestinationBookings,
  HotelResForm,
  FlightResForm,
  FeedbackForm,
  RentalForm,
  RentalPreview,
  CeoDashboard,
  SharedLayoutCeoDashboard,
  CeoOverview,
  CeoRevenue,
  EditorWebContent,
  DesResUpdateForm,
  SharedLayoutFinanceDashboard,
  FinanceDashboard,
  FinancePending,
  FinanceDestinationUpdateForm,
  FinanceFlightUpdateForm,
  FlightResUpdateForm,
  FinanceHotelUpdateForm,
  FinanceVehicleUpdateForm,
  HotelResUpdateForms,
  PackagePreview,
  PackageReservationForm,
  PackageReservationUpdateForm,
  FinanceUpdateForm,
  FinanceEdit,
  InvoiceForm,
  Invoice,
  InvoiceUpdateForm,
  FlightTicketView,
  RentalUpdateForm,
  FeedbackUpdateForm,
} from "../pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
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
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="hotelPreview/:id" element={<HotelPreview />} />
          <Route path="flightPreview/:id" element={<FlightPreview />} />
          <Route path="hotelResForm/:id" element={<HotelResForm />} />
          <Route path="flightResForm/:id" element={<FlightResForm />} />
          <Route path="rentalPreview/:id" element={<RentalPreview />} />
          <Route path="rentalForm/:id" element={<RentalForm />} />
          <Route path="PackagePreview/:id" element={<PackagePreview />} />
          


          <Route
            path="PackageReservationForm/:id"
            element={<PackageReservationForm />}
          />
        </Route>
        <Route path="/" element={<ClientDashboard />}>
        <Route path="FeedbackForm" element={<FeedbackForm />} />
          <Route path="feedbackUpdateForm/:id" element={<FeedbackUpdateForm />} />
        </Route>

        <Route path="/ceoDashboard" element={<SharedLayoutCeoDashboard />}>
          <Route index element={<CeoRevenue />} />
          <Route path="ceoOverview/:type" element={<CeoOverview />} />
          <Route path="ceoRevenue" element={<CeoRevenue />} />
        </Route>

        <Route path="/ceoDashboard" element={<SharedLayoutCeoDashboard />}>
          <Route index element={<CeoDashboard />} />
          <Route path="ceoOverview/:type" element={<CeoOverview />} />
        </Route>
        <Route path="/fianaceForm" element={<FinanceForm />} />
        <Route
          path="/editorDashboard"
          element={<SharedLayoutEditorDashboard />}
        >
          <Route index element={<CeoDashboard />} />
          <Route path="editorWebContent/:type" element={<EditorWebContent />} />
          <Route path="flightForm" element={<FlightForm />} />
          <Route path="hotelForm" element={<HotelForm />} />

          <Route path="destinationForm" element={<DestinationForm />} />
          <Route path="vehicleForm" element={<VehicleForm />} />
          <Route path="packageForm" element={<PackageForm />} />
          <Route path="flightUpdateForm/:id" element={<FlightUpdateForm />} />
          <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm />} />
          <Route
            path="destinationUpdateForm/:id"
            element={<DestinationUpdateForm />}
          />
          <Route path="vehicleUpdateForm/:id" element={<VehicleUpdateForm />} />
          <Route path="packageUpdateForm/:id" element={<PackageUpdateForm />} />
        </Route>

        <Route path="/clientDashboard/:id" element={<ClientDashboard />}>
          <Route index element={<UserProfile />} />
          <Route path="home" element={<Home />} />
          <Route path="bookings/:type" element={<Bookings />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="updateProfile" element={<ProfileUpdateForm />} />
          <Route path="payments" element={<Payments />} />
          <Route
            path="desRes/:desId/:desResId"
            element={<DesResUpdateForm />}
          />
          <Route
            path="flightRes/:flightResId"
            element={<FlightResUpdateForm />}
          />
          <Route
            path="flightTicket/:flightResId"
            element={<FlightTicketView />}
          />
          <Route
            path="hotelRes/:hotelResId"
            element={<HotelResUpdateForms />}
          />
          <Route
            path="PackageRes/:packageReservationId"
            element={<PackageReservationUpdateForm />}
          />
          <Route path="rental/:rentalId" element={<RentalUpdateForm />} />
        </Route>
      
        <Route
          path="/financeDashboard"
          element={<SharedLayoutFinanceDashboard />}
        >
          <Route index element={<FinanceDashboard />} />
          <Route path="pending/:type" element={<FinancePending />} />
          <Route
            path="destinationUpdateForm/:id"
            element={<FinanceDestinationUpdateForm />}
          />
          <Route path="financeRevenue" element={<CeoRevenue />} />
          <Route
            path="financeFlightUpdateForm/:id"
            element={<FinanceFlightUpdateForm />}
          />
          <Route
            path="financeHotelUpdateForm/:id"
            element={<FinanceHotelUpdateForm />}
          />

          <Route
            path="financeVehicleUpdateForm/:id"
            element={<FinanceVehicleUpdateForm />}
          />
          <Route path="invoiceForm" element={<InvoiceForm />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="InvoiceUpdateForm/:id" element={<InvoiceUpdateForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
