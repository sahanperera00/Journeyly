import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv/config";
import session from "express-session";
import destinationRouter from "./routes/destination.js";
import desTicketRouter from "./routes/desTicket.js";
import flightTicketRouter from "./routes/flightTicket.js";
import hotelRouter from "./routes/hotels.js";
import hotelResRouter from "./routes/hotelReservation.js";
import flightRouter from "./routes/flights.js";
import packageRouter from "./routes/packages.js";
import clientRouter from "./routes/client.js";
import financeRouter from "./routes/finance.js";
import rentalRoutes from './routes/rental.js'
import vehicleRoutes from './routes/vehicles.js'
import feedbackRouter from "./routes/feedback.js";
import packageReservation from "./routes/packageReservation.js";
import invoiceRouter from "./routes/invoice.js";

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use("/destination", destinationRouter);
app.use("/desTicket", desTicketRouter);
app.use("/flightTicket", flightTicketRouter);
app.use("/hotels", hotelRouter);
app.use("/hotelRes", hotelResRouter);
app.use("/flights", flightRouter);
app.use("/packages", packageRouter);
app.use("/client", clientRouter);
app.use("/finance", financeRouter);
app.use('/rental', rentalRoutes);
app.use('/vehicles', vehicleRoutes);
app.use("/feedback", feedbackRouter);
app.use("/packageReservation", packageReservation);
app.use("/invoice", invoiceRouter);


app.use(session({
    secret: 'journeyly',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: 'none',
        secure: true
    }

}));

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
