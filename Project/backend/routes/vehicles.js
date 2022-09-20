import express from 'express';
import { getVehicle, getAllVehicles, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicles.js';

const router = express.Router();

router.get('/:id', getVehicle);
router.post('/create', createVehicle);
router.get('/', getAllVehicles);
router.put('/update/:id', updateVehicle);
router.delete('/delete/:id', deleteVehicle);


export default router;