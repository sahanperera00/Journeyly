import express from "express";

import { createHotelContent } from "../controllers/hotels.js";

const router = express.Router();

router.post('/create',createHotelContent);

export default router;