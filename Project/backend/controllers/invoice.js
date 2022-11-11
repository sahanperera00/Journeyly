import Invoice from "../models/invoice.js"

export const getAllInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.find();
        res.status(200).json(invoice);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getInvoice = async (req, res) => {
    const id = req.params.id;
    try {
        const invoice = await Invoice.findById(id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createInvoice = async (req, res) => {
    const invoice = req.body;
    const newInvoice = new Invoice(invoice);
    try {
        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (error) {
        res.json({ message: error });
    }        
}

export const updateInvoice = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Invoice.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Invoice updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteInvoice = async (req, res) => {
    const id = req.params.id;
    try {
        await Invoice.findByIdAndDelete(id);
        res.status(200).send({status: "Finance deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}