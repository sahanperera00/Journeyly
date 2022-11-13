import rental from "../models/rental.js";

export const getAllRental = async (req, res) => {
  try {
    const rentals = await rental.find();

    res.status(200).json(rentals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRental = async (req, res) => {
  const id = req.params.id;
  try {
    const Rental = await rental.findById(id);
    res.status(200).json(Rental);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserRentals = async (req, res) => {
  const userID = req.params.userId;
  try {
    const rentals = await rental.find({ userId: userID });
    res.status(200).json(rentals);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createRental = async (req, res) => {
  const Rental = req.body;

  const newRental = new rental(Rental);

  try {
    await newRental.save();

    res.status(201).json(newRental);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateRental = async (req, res) => {
  const id = req.params.id;

  const updateRentals = req.body;

  try {
    await rental.findByIdAndUpdate(id, updateRentals);

    res.status(200).send({ status: "Rental updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRental = async (req, res) => {
  const id = req.params.id;

  try {
    await rental.findByIdAndDelete(id);

    res.status(200).send({ status: "Rental deleted" });
  } catch {
    res.status(404).json({ message: error.message });
  }
};

export const getrentalbyUID = async (req, res) => {
  const id = req.params.id;
  try {
    const rentals = await rental.findOne(id);
    res.status(200).json(rentals);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
