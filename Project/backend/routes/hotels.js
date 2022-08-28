import express from "express";

import { createHotelContent } from "../controllers/hotels.js";

const router = express.Router();

router.post('/',createHotelContent);

export default router;