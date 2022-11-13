import mongoose from "mongoose"

const Schema = mongoose.Schema;

const feedbackSchema = new Schema ({
    feedbacktype: {
        type:String,
        required:true
    },
    placeofincident: {
        type:String,
        required:true
    },
    phonenumber: {
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:false
    },
    image: {
        type: String,
        required: true
    },

});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

