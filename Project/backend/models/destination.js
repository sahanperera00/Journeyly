import mongoose from "mongoose";

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    longDesc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    extra: {
        type: [String],
        required: true
    },
    includes: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    }
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;