import Feedback from "../models/feedback.js";

export const getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getFeedback = async (req, res) => {
    const id = req.params.id;
    try {
        const feedback = await Feedback.findById(id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createFeedback = async (req, res) => {
    const feedback = req.body;
    const newFeedback = new Feedback(feedback);
    try {
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.json({ message: error });
    }        
}

export const updateFeedback = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Feedback.findByIdAndUpdate(id, update);
        res.status(200).send({status: "Feedback updated"});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteFeedback = async (req, res) => {
    const id = req.params.id;
    try {
        await Feedback.findByIdAndDelete(id);
        res.status(200).send({status: "Feedback deleted"});
    }catch{
        res.status(404).json({ message: error });
    }
}