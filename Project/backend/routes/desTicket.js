import express from "express";
import { getAllDesTickets, getDesTicket, getUserDesTickets, createDesTicket, updateDesTicket, deleteDesTicket } from "../controllers/desTicket.js";

const router = express.Router();

router.get("/", getAllDesTickets);
router.get("/:id", getDesTicket);
router.get("/:userId", getUserDesTickets);
router.post("/create", createDesTicket);
router.put("/update/:id", updateDesTicket);
router.delete("/delete/:id", deleteDesTicket);

export default router;