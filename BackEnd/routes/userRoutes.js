import express from "express";
import { authUser, createToken, deleteUser, getTokenList, getUserById, getUserProfile, getUsers, paidUserBalance, registerUser, updateUser, updateUserBalance, updateUserProfile } from "../controllers/userController.js";
import {protect, admin} from "../middlewire/authMiddleware.js";

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router.post('/token', createToken);
router.get('/token', getTokenList);
router.put('/token', updateUserBalance);
router.put('/paid', paidUserBalance);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect,admin, updateUser)
export default router;
