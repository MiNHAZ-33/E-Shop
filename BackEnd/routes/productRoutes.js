import express from "express";
import { createProduct, deletePoduct, getPoductById, getProducts, updateProduct } from "../controllers/productController.js";
import {protect, admin} from '../middlewire/authMiddleware.js'

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);

router.route('/:id').get(getPoductById).delete(protect, admin, deletePoduct ).put(protect, admin, updateProduct);

export default router;