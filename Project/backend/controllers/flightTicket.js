import FlightTicket from "../models/flightTicket.js";

export const getAllFlightTickets = async (req, res) => {
    try {
        const flightTickets = await FlightTicket.find();
        res.status(200).json(flightTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getFlightTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const flightTicket = await FlightTicket.findById(id);
        res.status(200).json(flightTicket);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getUserFlightTickets = async (req, res) => {
    const userID = req.params.userId;
    try {
        const flightTickets = await FlightTicket.find({userId: userID});
        res.status(200).json(flightTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createFlightTicket = async (req, res) => {
    const flightTicket = req.body;
    const newFlightTicket = new FlightTicket(flightTicket);
    try {
        await newFlightTicket.save();
        res.status(201).json(newFlightTicket);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}

export const updateFlightTicket = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await FlightTicket.findByIdAndUpdate(id, update);
        res.status(200).send({status: "FlightTicket updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteFlightTicket = async (req, res) => {
    const id = req.params.id;
    try {
        await FlightTicket.findByIdAndDelete(id);
        res.status(200).send({status: "FlightTicket deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}

export const getFlightTicketbyUID = async (req, res) => {
    const id = req.params.id;
    try {
        const flightTickets = await FlightTicket.findOne(id);
        res.status(200).json(flightTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}