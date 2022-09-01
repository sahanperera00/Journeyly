import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv/config";
import destinationRouter from "./routes/destination.js";
import desTicketRouter from "./routes/desTicket.js";
import hotelRouter from "./routes/hotels.js";
import hotelResRouter from "./routes/hotelReservation.js";
import flightRouter from "./routes/flights.js";

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use("/destination", destinationRouter);
app.use("/desTicket", desTicketRouter);
app.use("/hotels",hotelRouter);
app.use("/hotelRes",hotelResRouter);
app.use("/flights",flightRouter);

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});