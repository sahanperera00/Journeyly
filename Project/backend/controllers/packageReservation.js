import packageReservation from "../models/packageReservation.js";

//read 
export const getAllpackageReservation = async (req, res) => {
    try {
        const packageReservations = await packageReservation.find();
        res.status(200).json(packageReservations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getpackageReservation = async (req, res) => {
    const id = req.params.id;
    try {
        const packageReservations = await packageReservation.findById(id);
        res.status(200).json(packageReservations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getUserpackageReservations = async (req, res) => {
    const userID = req.params.userId;
    try {
        const packageReservations = await packageReservation.find({userId: userID});
        res.status(200).json(packageReservations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createpackageReservation = async (req, res) => {
    const packageReservations = req.body;
    const newPackageReservation = new packageReservation(packageReservations);
    try {
        await newPackageReservation.save();
        res.status(201).json(newPackageReservation);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}

export const updatepackageReservation = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await packageReservation.findByIdAndUpdate(id, update);
        res.status(200).send({status: "packageReservation updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deletepackageReservation = async (req, res) => {
    const id = req.params.id;
    try {
        await packageReservation.findByIdAndDelete(id);
        res.status(200).send({status: "packageReservation deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}

export const getpackageReservationbyUID = async (req, res) => {
    const id = req.params.id;
    try {
        const packageReservations = await packageReservation.findOne(id);
        res.status(200).json(packageReservations);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

