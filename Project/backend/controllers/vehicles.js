import vehicle from "../models/vehicles.js";

export const getAllVehicles =  async (req, res) => {
    try {
        const Vehicle = await vehicle.find();

        res.status(200).json(Vehicle);

    } catch (error) {
        res.status(404).json( {message: error.message} );
    }
}

export const getVehicle = async (req, res) => {
    const id = req.params.id;
    try {
        const Vehicle = await vehicle.findById(id);
        res.status(200).json(Vehicle);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createVehicle =  async (req, res) => {
    const Vehicle = req.body;

    const newVehicle = new vehicle(Vehicle);

    try {
        await newVehicle.save();

        res.status(201).json(newVehicle);


    } catch (error) {
        res.status(409).json(  {message: error.message} );
    }
}

export const updateVehicle = async (req, res) => {

    const id = req.params.id;

    const updateVehicle = req.body;

    try {
        await vehicle.findByIdAndUpdate(id, updateVehicle);

        res.status(200).send({status: "Vehicle updated"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteVehicle = async (req, res) => {

    const id = req.params.id;

    try {
        await vehicle.findByIdAndDelete(id);

        res.status(200).send({status: "Vehicle deleted"});

    }catch{
        res.status(404).json({ message: error.message });
    }
}