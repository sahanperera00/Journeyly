import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightTicketSchema = new Schema({
    flightID: {
        type: String,
        required: true
    },
    flightName:{
        type: String,
        required: true
    },
    airline:{
        type:String,
        required:true
    },
    startAirport:{
        type: String,
        required: true
    },
    departureDate:{
        type: String,
        required: true
    },
    departureTime:{
        type: String,
        required: true
    },
    destinationAirport:{
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    passportID: {
        type: String,
        required: true
    },
    classType: {
        type: String,
        required: true
    },
    seatNo:{
        type:String,
        required: true
    },
    gate:{
        type:String
    },
    economyClass:{
        type: Number,
    },
    businessClass:{
        type:Number,
    },
    price: {
        type:Number
    }
});

const flightTicket = mongoose.model("flightTicket", flightTicketSchema);

export default flightTicket;