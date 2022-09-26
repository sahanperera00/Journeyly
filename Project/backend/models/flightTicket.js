import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightTicketSchema = new Schema({
    flightID: {
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
    price: {
        type:Number
    }
});

const flightTicket = mongoose.model("flightTicket", flightTicketSchema);

export default flightTicket;