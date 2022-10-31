import express from "express";

import { getAllClients, getClient, createClient, updateClient, deleteClient, loginClient, getClientInfo } from "../controllers/client.js";

const router = express.Router();

router.get("/", getAllClients);
router.get("/getClientInfo/:email", getClientInfo);
router.post("/create", createClient);
router.put("/update/:id", updateClient);
router.delete("/delete/:id", deleteClient);
router.post("/login", loginClient);
router.get("/:id", getClient);

export default router;