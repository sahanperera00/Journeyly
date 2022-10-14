import DesTicket from "../models/desTicket.js";

export const getAllDesTickets = async (req, res) => {
    try {
        const desTickets = await DesTicket.find();
        res.status(200).json(desTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getDesTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const desTicket = await DesTicket.findById(id);
        res.status(200).json(desTicket);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getUserDesTickets = async (req, res) => {
    const userID = req.params.userId;
    try {
        const desTickets = await DesTicket.find({userId: userID});
        res.status(200).json(desTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createDesTicket = async (req, res) => {
    const desTicket = req.body;
    const newDesTicket = new DesTicket(desTicket);
    try {
        await newDesTicket.save();
        res.status(201).json(newDesTicket);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}

export const updateDesTicket = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await DesTicket.findByIdAndUpdate(id, update);
        res.status(200).send({status: "DesTicket updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteDesTicket = async (req, res) => {
    const id = req.params.id;
    try {
        await DesTicket.findByIdAndDelete(id);
        res.status(200).send({status: "DesTicket deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}

export const getDesTicketbyUID = async (req, res) => {
    const id = req.params.id;
    try {
        const desTickets = await DesTicket.findOne(id);
        res.status(200).json(desTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}