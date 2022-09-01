import Package from "../models/packages.js";

export const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getPackages = async (req, res) => {
    const id = req.params.id;
    try {
        const packages = await Package.findById(id);
        res.status(200).json(packages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createPackages = async (req, res) => {
    const packages = req.body;
    const newPackages = new Package(packages);
    try {
        await newPackages.save();
        res.status(201).json(newPackages);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}

export const updatePackages = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Package.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Package updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deletePackages = async (req, res) => {
    const id = req.params.id;
    try {
        await Package.findByIdAndDelete(id);
        res.status(200).send({status: "Package deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}