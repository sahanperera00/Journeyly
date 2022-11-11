import express from "express";
import { getAllpackageReservation, getpackageReservation, getUserpackageReservations, createpackageReservation, updatepackageReservation, deletepackageReservation, getpackageReservationbyUID } from "../controllers/packageReservation.js";

const router = express.Router(); //set routers

router.get("/", getAllpackageReservation);
router.get("/:id", getpackageReservation);
router.get("/user/:userId", getUserpackageReservations);
router.post("/create", createpackageReservation);
router.put("/update/:id", updatepackageReservation);
router.delete("/delete/:id", deletepackageReservation);
router.get("/user/:userId", getpackageReservationbyUID);

export default router;