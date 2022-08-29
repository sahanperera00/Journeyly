import mongoose from "mongoose";

const Schema =mongoose.Schema;

const flightSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    startAirport:{
        type: String,
        required: true
    },
    departureTime:{
        type: Date,
        required: true
    },
    destinationAirport:{
        type: String,
        required: true
    },
    ArrivalTime:{
        type: Date,
        required: true
    },
    economyClass:{
        type:Boolean,
        required:true
    },
    businessClass:{
        type:Boolean,
        required: true
    },
    images:{
        type:[String],
        required: true
    }
});

const Flight = mongoose.model("flight",flightSchema); /*Document to be directed in the mongoDB*/

export default Flight;