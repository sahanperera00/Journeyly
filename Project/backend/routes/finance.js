import express from "express";
import { getAllFinance, getFinance, createFinance, updateFinance, deleteFinance } from "../controllers/finance.js";

const router = express.Router();

router.get("/", getAllFinance);
router.get("/:id", getFinance);
router.post("/create", createFinance);
router.put("/update/:id", updateFinance);
router.delete("/delete/:id", deleteFinance);

export default router;