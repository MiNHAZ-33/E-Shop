import express from "express";
import { addOrderItems, getOrderById } from "../controllers/oderController.js";
import protect from "../middlewire/authMiddleware.js";

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router;
