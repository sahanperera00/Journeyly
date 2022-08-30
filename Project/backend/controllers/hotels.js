import mongoose from "mongoose";
import Hotel from "../models/hotels.js";

export const createHotelContent = async (req,res)=>{
    
    const hotel=req.body;  //Catches the details from form

    const newHotel = Hotel(hotel);  //Creating new hotel by passing the form as parameter
    try {
        await newHotel.save();  //save data 

        res.status(201).json(newHotel);  //successfull message

    } catch (error) {
        res.status(409).json({message: error.message});  //error message
    }
}

export const getAllHotels = async(req,res)=>{
    try {
        const hotel = await Hotel.find();  //fetching all the records

        res.status(200).json(hotel);

    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const updateHotel = async(req,res)=>{
    const id=req.params.id; // allocating variable for ID passed
    const up= req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){  //Checks whether the record with the corresponding id exists in the DB
        return res.status(404).send('No Such Hotel Content');
    }

    try {
        await Hotel.findByIdAndUpdate(id,up);
        res.status(200).send({status:"Hotel Detail Updated"});
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const getUniqueHotel = async(req,res)=>{
    const id = req.params.id;  // allocating variable for ID passed

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Such Hotel Content');  //Checks whether the record with the corresponding ID exists in the DB
    }

    try {
        const hotel = await Hotel.findById(id);  //Fetching specific record
        res.status(200).json(hotel);
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const removeHotel = async(req,res)=>{

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Such Hotel Content');  //Checks whether the record with the corresponding ID exists in the DB
    }

    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).send({status: "Hotel Content Deleted..."});
    } catch (error) {
        res.status(404).json({message: error});
    }
}