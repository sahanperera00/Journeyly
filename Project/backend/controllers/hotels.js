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

export const getAllDestinations = async(req,res)=>{
    try {
        const hotel = await Hotel.find();  //fetching all the records

        res.status(200).json(hotel);

    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const updateHotel = async(req,res)=>{
    const id=req.params.id;
    const up= req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Such Hotel Content');
    }

    await Hotel.findByIdAndUpdate(id,up);
}