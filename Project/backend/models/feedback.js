import mongoose, { Schema } from "mongoose"

const Schema = mongoose.Schema;

const feedbackSchema = new Schema ({

    name: {
        type:String,
        required:true
    },
    phonenumber: {
        type:String,
        required:true
    },
    feedbacktype:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:false
    },

});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

