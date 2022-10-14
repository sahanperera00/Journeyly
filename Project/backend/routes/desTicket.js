import express from "express";
import { getAllDesTickets, getDesTicket, getUserDesTickets, createDesTicket, updateDesTicket, deleteDesTicket, getDesTicketbyUID } from "../controllers/desTicket.js";

const router = express.Router();

router.get("/", getAllDesTickets);
router.get("/:id", getDesTicket);
router.get("/user/:userId", getUserDesTickets);
router.post("/create", createDesTicket);
router.put("/update/:id", updateDesTicket);
router.delete("/delete/:id", deleteDesTicket);
router.get("/user/:userId", getDesTicketbyUID);

export default router;