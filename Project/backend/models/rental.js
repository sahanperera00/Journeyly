import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    type: String,
    tags: [String],
    rating: {
        type: Number,
        default: 0
    },
});

const rental = mongoose.model('rental', postSchema);

export default rental;