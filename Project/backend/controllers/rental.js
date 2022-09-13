import PostMessage from "../models/rental.js";

export const getRental =  async (req, res) => {
    try {
        const rentals = await rentals.find();

        res.status(200).json(rentals);

    } catch (error) {
        res.status(404).jason( {message: error.message} );
    }
}

export const createRental =  async (req, res) => {
    const rental = req.body;

    const newRental = new rental(rental);

    try {
        await newPost.save();

        res.status(201).json(newRental);


    } catch (error) {
        res.status(409).json(  {message: error.message} );
    }
}