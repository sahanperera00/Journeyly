import Client from "../models/client";


export const getAllClients = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getClient = async (req, res) => {
    const id = req.params.id;
    try {
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createClient = async (req, res) => {
    const client = req.body;
    const newClient = new Client(client);
    try {
        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(404).json({ message: error });
    }        
}

export const updateClient = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Client.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Client details updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteClient = async (req, res) => {
    const id = req.params.id;
    try {
        await Client.findByIdAndDelete(id);
        res.status(200).send({status: "Client details deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}