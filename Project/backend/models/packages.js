import mongoose from "mongoose";

const Schema = mongoose.Schema;

const packageSchema = new Schema({

    destination : {
        type : String,
        required: true
    },
    members : {
        type :String,
        required : true
    },
    hotel : {
        type :String,
       
    },
    roomType : {
        type :String,
     
    },
    vehicle : {
        type :String,
       
    },
    guide : {
        type :String,
        
    },
    price : {
        type :Number,
        required : true
    },
});

const Package = mongoose.model("Package", packageSchema);

export default Package;