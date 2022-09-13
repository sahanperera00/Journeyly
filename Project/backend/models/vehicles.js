import mongoose from "mongoose";

const vehicle = mongoose.Schema;

const newVehicle = new vehicle({
    vehicleId: {
        type: String,
        required: true
    },
    
    type: {
        type: String,
        required: true
    }, 

    driverName: {
        type: String,
    },

    ownerName: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },

    fee: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

const vehicles = mongoose.model('vehicle', newVehicle);

export default vehicles;