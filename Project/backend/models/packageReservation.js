import mongoose from "mongoose";

const Schema =mongoose.Schema;

const packageReservationSchema= new Schema({
    name:{
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
    phoneNo: {
        type: Number,
        required: true
    },

});  //DataBase attributes

const packageReservation = mongoose.model("packageReservation",packageReservationSchema);  /*Document to be directed in the mongoDB*/

export default packageReservation;