import mongoose from "mongoose";
import Flight from "../models/flights.js";

export const createFlightContent = async (req,res)=>{
    
    const flight=req.body;  //Catches the details from form

    const newFlight = Flight(flight);  //Creating new flight by passing the form as parameter
    try {
        await newFlight.save();  //save data 

        res.status(201).json(newFlight);  //successfull message

    } catch (error) {
        res.status(409).json({message: error.message});  //error message
    }
}

export const getAllFlights = async(req,res)=>{
    try {
        const flight = await Flight.find();  //fetching all the records

        res.status(200).json(flight);

    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const updateFlight = async(req,res)=>{
    const id=req.params.id; // allocating variable for ID passed
    const up= req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){  //Checks whether the record with the corresponding id exists in the DB
        return res.status(404).send('No Such Flights');
    }

    try {
        await Flight.findByIdAndUpdate(id,up);
        res.status(200).send({status:"Flight Detail Updated"});
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const getUniqueFlight = async(req,res)=>{
    const id = req.params.id;  // allocating variable for ID passed

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Such Flight Content');  //Checks whether the record with the corresponding ID exists in the DB
    }

    try {
        const flight = await Flight.findById(id);  //Fetching specific record
        res.status(200).json(flight);
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const removeFlight = async(req,res)=>{

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No Such Flight Content');  //Checks whether the record with the corresponding ID exists in the DB
    }

    try {
        await Flight.findByIdAndDelete(id);
        res.status(200).send({status: "Flight Content Deleted..."});
    } catch (error) {
        res.status(404).json({message: error});
    }
}