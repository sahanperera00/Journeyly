import Finance from "../models/finance.js"

export const getAllFinance = async (req, res) => {
    try {
        const finance = await Finance.find();
        res.status(200).json(finance);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getFinance = async (req, res) => {
    const id = req.params.id;
    try {
        const finance = await Finance.findById(id);
        res.status(200).json(finance);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createFinance = async (req, res) => {
    const finance = req.body;
    const newFinance = new Finance(finance);
    try {
        await newFinance.save();
        res.status(201).json(newFinance);
    } catch (error) {
        res.json({ message: error });
    }        
}

export const updateFinance = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Finance.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Finance updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteFinance = async (req, res) => {
    const id = req.params.id;
    try {
        await Finance.findByIdAndDelete(id);
        res.status(200).send({status: "Finance deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}