import express from "express";
import { deletePoduct, getPoductById, getProducts } from "../controllers/productController.js";
import {protect, admin} from '../middlewire/authMiddleware.js'

const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getPoductById).delete(protect, admin, deletePoduct );

export default router;