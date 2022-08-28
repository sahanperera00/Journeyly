import desTicket from "../models/desTicket";

export const getAllDesTickets = async (req, res) => {
    try {
        const desTickets = await desTicket.find();
        res.status(200).json(desTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getDesTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const desTicket = await desTicket.findById(id);
        res.status(200).json(desTicket);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getUserDesTickets = async (req, res) => {
    const userId = req.params.userId;
    try {
        const desTickets = await desTicket.find({userId: userId});
        res.status(200).json(desTickets);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createDesTicket = async (req, res) => {
    const desTicket = req.body;
    const newDesTicket = new desTicket(desTicket);
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
        const desTicket = await desTicket.findByIdAndUpdate(id, update);
        res.status(200).send({status: "DesTicket updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteDesTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const desTicket = await desTicket.findByIdAndDelete(id);
        res.status(200).send({status: "DesTicket deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}
