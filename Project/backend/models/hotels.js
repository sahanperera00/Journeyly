import mongoose from "mongoose";

const Schema =mongoose.Schema;

const hotelSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    // price:{
    //     type: Number,
    //     required: true
    // },
    description:{
        type: String,
        required: true
    },
    stars:{
        type:Number,
        required:true
    },
    facilities:{
        type:[String],
        required: true
    },
    images:{
        type:[String],
        required: true
    },
    buyingPrice:{
        type:Number,
    },
    sellingPrice:{
        type:Number,
    },
});

const Hotel = mongoose.model("hotel",hotelSchema); /*Document to be directed in the mongoDB*/

export default Hotel;
