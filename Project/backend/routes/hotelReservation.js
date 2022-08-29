import express from "express";

import {createHotelReservation,showHotelReservation,customizeHotelReservation,cancelHotelReservation} from "../controllers/hotelReservation.js";

const router = express.Router();

router.post('/create',createHotelReservation);
router.get('/',showHotelReservation);
router.put('/customize/:id',customizeHotelReservation);
router.delete('/cancel/:id',cancelHotelReservation);

export default router;