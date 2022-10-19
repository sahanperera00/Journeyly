import express from 'express';
import { getRental, getAllRental, createRental, updateRental, deleteRental, getrentalbyUID, getUserRentals } from '../controllers/rental.js';

const router = express.Router();

router.get('/:id', getRental);
router.get("/user/:userId", getUserRentals);
router.post('/create', createRental);
router.get('/', getAllRental);
router.put('/update/:id', updateRental);
router.delete('/delete/:id', deleteRental);
router.get("/user/:userId", getrentalbyUID);


export default router;