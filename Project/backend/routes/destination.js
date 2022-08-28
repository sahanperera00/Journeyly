import express from "express";
import { getAllDestinations, getDestination, createDestination, updateDestination, deleteDestination } from "../controllers/destination.js";

const router = express.Router();

router.get("/", getAllDestinations);
router.get("/:id", getDestination);
router.post("/create", createDestination);
router.put("/update/:id", updateDestination);
router.delete("/delete/:id", deleteDestination);

export default router;