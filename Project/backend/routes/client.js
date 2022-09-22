import express from "express";

import { getAllClients, getClient, createClient, updateClient, deleteClient, loginClient } from "../controllers/client.js";

const router = express.Router();

router.get("/", getAllClients);
router.get("/:id", getClient);
router.post("/create", createClient);
router.put("/update/:id", updateClient);
router.delete("/delete/:id", deleteClient);
router.post("/login", loginClient );

export default router;