import express from 'express';
import { getRental, createRental } from '../controllers/rental.js';

const router = express.Router();

router.get('/', getRental);
router.post('/', createRental);

export default router;