import mongoose from "mongoose";
import Destination from "../models/destination.js";

export const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createDestination = async (req, res) => {
    const destination = req.body;
    const newDestination = new Destination(destination);
    try {
        await newDestination.save();
        res.status(201).json(newDestination);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}