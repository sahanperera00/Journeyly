import express from "express";

import { getAllHotels,createHotelContent,getUniqueHotel,updateHotel,removeHotel } from "../controllers/hotels.js";

const router = express.Router();  //Setting the Router

router.get("/",getAllHotels);
router.post('/create',createHotelContent);
router.get("/:id",getUniqueHotel);
router.put("/update/:id",updateHotel);
router.delete("/remove/:id",removeHotel);  // All the routes


export default router;