import express from "express";
import { getAllFlightTickets, getFlightTicket, getUserFlightTickets, createFlightTicket, updateFlightTicket, deleteFlightTicket, getFlightTicketbyUID } from "../controllers/flightTicket.js";

const router = express.Router();

router.get("/", getAllFlightTickets);
router.get("/:id", getFlightTicket);
router.get("/user/:userId", getUserFlightTickets);
router.post("/create", createFlightTicket);
router.put("/update/:id", updateFlightTicket);
router.delete("/delete/:id", deleteFlightTicket);
router.get("/user/:userId", getFlightTicketbyUID);

export default router;