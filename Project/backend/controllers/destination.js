import Destination from "../models/destination.js";

export const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getDestination = async (req, res) => {
    const id = req.params.id;
    try {
        const destination = await Destination.findById(id);
        res.status(200).json(destination);
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
        res.json({ message: error });
    }        
}

export const updateDestination = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Destination.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Destination updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteDestination = async (req, res) => {
    const id = req.params.id;
    try {
        await Destination.findByIdAndDelete(id);
        res.status(200).send({status: "Destination deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}