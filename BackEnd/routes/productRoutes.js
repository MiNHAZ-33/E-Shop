import express from "express";
import { getPoductById, getProducts } from "../controllers/productController.js";

const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getPoductById);

export default router;