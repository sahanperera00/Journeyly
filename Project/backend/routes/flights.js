import express from "express";

import { createFlightContent,getAllFlights,getUniqueFlight,updateFlight,removeFlight } from "../controllers/flights.js";

const router = express.Router();  //Setting the Router

router.get("/",getAllFlights);
router.post('/create',createFlightContent);
router.get("/:id",getUniqueFlight);
router.put("/update/:id",updateFlight);
router.delete("/remove/:id",removeFlight);  // All the routes


export default router;