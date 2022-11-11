import mongoose from "mongoose";

const postSchema = mongoose.Schema;

const newRental = new postSchema({
    vehicleId: {
        type: String,
        
    },

    userID:{
        type: String,
        required: true
    },

    driverName: {
        type: String,
        
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
    startDes: {
        type: String
    },
    endDes: {
        type: String
    },

});

const rental = mongoose.model('rental', newRental);

export default rental;