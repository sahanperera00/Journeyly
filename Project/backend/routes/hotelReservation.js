import express from "express";

import {createHotelReservation,showHotelReservation,customizeHotelReservation,cancelHotelReservation,getUserHotelTickets} from "../controllers/hotelReservation.js";

const router = express.Router();

router.post('/create',createHotelReservation);
router.get('/',showHotelReservation);
router.put('/customize/:id',customizeHotelReservation);
router.delete('/cancel/:id',cancelHotelReservation);
router.get("/user/:userId",getUserHotelTickets);

export default router;