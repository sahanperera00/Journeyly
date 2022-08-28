import mongoose from "mongoose";
import Hotel from "../models/hotels.js";

export const createHotelContent = async (req,res)=>{
    
    const hotel=req.body;  //Catches the details from form

    const newHotel = newHotel(hotel);  //Creating new hotel by passing the form as parameter
    try {
        await newHotel.save();  //save data 

        res.status(201).json(newHotel);  //successfull message

    } catch (error) {
        res.status(409).json({message: error.message});  //error message
    }
}