import express from "express";
import { getAllDestinations, createDestination } from "../controllers/destination.js";

const router = express.Router();

router.get("/", getAllDestinations);
router.post("/create", createDestination);

export default router;