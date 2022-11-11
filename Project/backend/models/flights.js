import mongoose from "mongoose";

const Schema =mongoose.Schema;

const flightSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    flightId:{
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
    arrivalDate:{
        type: String,
        required: true
    },
    arrivalTime:{
        type: String,
        required: true
    },
    economyClass:{
        type: Number,
    },
    businessClass:{
        type:Number,
    },
    imageI:{
        type:String,
    },
    bookedSeatsEconomy:{
        type:[String],
    },
    bookedSeatsBusiness:{
        type:[String],
    },
    gate:{
        type:String,
    }
});

const Flight = mongoose.model("flight",flightSchema); /*Document to be directed in the mongoDB*/

export default Flight;