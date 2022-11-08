import express from "express";
import { getAllInvoice, getInvoice, createInvoice, updateInvoice, deleteInvoice } from "../controllers/invoice.js";

const router = express.Router();

router.get("/", getAllInvoice);
router.get("/:id", getInvoice);
router.post("/create", createInvoice);
router.put("/update/:id", updateInvoice);
router.delete("/delete/:id", deleteInvoice);

export default router;