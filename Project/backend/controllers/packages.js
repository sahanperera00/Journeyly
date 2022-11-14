import Package from "../models/packages.js";
//get URl and data
//read packages
export const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
//read by Id
export const getPackages = async (req, res) => {
    const id = req.params.id;
    try {
        const packages = await Package.findById(id);
        res.status(200).json(packages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
//create packages
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
//update packages
export const updatePackages = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Package.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Package updated Succsessfully"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
//delete packages
export const deletePackages = async (req, res) => {
    const id = req.params.id;
    try {
        await Package.findByIdAndDelete(id);
        res.status(200).send({status: "Package deleted Succsessfully"});
    }catch{
        res.status(404).json({ message: error });
    }
}