import mongoose from "mongoose";

const Schema =mongoose.Schema;

const packageReservationSchema= new Schema({
    name:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
   

});  //DataBase attributes

const packageReservation = mongoose.model("packageReservation",packageReservationSchema);  /*Document to be directed in the mongoDB*/

export default packageReservation;