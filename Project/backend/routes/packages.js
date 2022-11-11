import express from "express";
import { getAllPackages, getPackages, createPackages, updatePackages, deletePackages } from "../controllers/Packages.js";

const router = express.Router(); //set routers

router.get("/", getAllPackages);
router.get("/:id", getPackages);
router.post("/create", createPackages);
router.put("/update/:id", updatePackages);
router.delete("/delete/:id", deletePackages);

export default router;