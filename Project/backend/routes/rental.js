import express from 'express';
import { getRental, getAllRental, createRental, updateRental, deleteRental } from '../controllers/rental.js';

const router = express.Router();

router.get('/:id', getRental);
router.post('/create', createRental);
router.get('/', getAllRental);
router.put('/update/:id', updateRental);
router.delete('/delete/:id', deleteRental);


export default router;