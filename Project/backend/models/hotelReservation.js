import mongoose from "mongoose";

const Schema =mongoose.Schema;

const hotelResSchema= new Schema({
    hotelID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    hotel_Name:{
        type:String,
        required: true
    },
    check_in:{
        type:Date,
        required: true
    },
    check_out:{
        type:Date,
        required: true
    },
    suite:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    customizations:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required: true
    },
    userID:{
        type: String,
        required: true
    }
    // adults:{
    //     type:Number,
    //     required:true
    // },
    // children:{
    //     type:Number,
    //     required:true
    // },
    
});  //DataBase attributes

const HotelResForm = mongoose.model("hotel_reservations",hotelResSchema);  /*Document to be directed in the mongoDB*/

export default HotelResForm;