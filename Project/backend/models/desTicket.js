import mongoose from "mongoose";

const Schema = mongoose.Schema;

const desTicketSchema = new Schema({
    desId: {
        type: String,
    },
    userID:{
        type: String,
        required: true
    },
    desName: {
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
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const desTicket = mongoose.model("desTicket", desTicketSchema);

export default desTicket;