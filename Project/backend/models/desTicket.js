import mongoose from "mongoose";

const Schema = mongoose.Schema;

const desTicketSchema = new Schema({
    desId: {
        type: String,
        required: true
    },
    userId: {
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
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    adults: {
        type: Number
    },
    children: {
        type: Number
    },
    notes: {
        type: String,
        required: true
    }
});

const desTicket = mongoose.model("desTicket", desTicketSchema);

export default desTicket;