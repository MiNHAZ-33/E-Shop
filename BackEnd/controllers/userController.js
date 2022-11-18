import asyncHandler from 'express-async-handler';
import Card from '../model/paymentCardModel.js';

import User from "../model/userModel.js";
import generateToken from '../utils/generateTokens.js';

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSuperAdmin: user.isSuperAdmin,
            balance: user.balance,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSuperAdmin: user.isSuperAdmin,
            balance: user.balance
        })
    } else {
        res.status(401);
        throw new Error('User not found')
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password || user.password
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            balance: user.balance,
            isSuperAdmin: updatedUser.isSuperAdmin,
            token: generateToken(updatedUser._id)
        })

    } else {
        res.status(401);
        throw new Error('User not found')
    }
})


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, balance } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error('User already exist')
    }

    const user = await User.create({
        name,
        email,
        password,
        balance
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSuperAdmin: user.isSuperAdmin,
            balance: user.balance,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('User not found');
    }
})


const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.remove();
        res.json({ message: 'User removed' })
    } else {
        res.status(401);
        throw new Error('User not found');
    }
})

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
    if (user) {

        res.json(user);
    } else {
        res.status(401);
        throw new Error('User not found');
    }
})


const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin;

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            balance: user.balance,
            isAdmin: updatedUser.isAdmin,
            isSuperAdmin: updatedUser.isSuperAdmin
        })

    } else {
        res.status(401);
        throw new Error('User not found')
    }
})

const createToken = asyncHandler(async (req, res) => {
    const { balance } = req.body

    try {
        for (var i = 0; i < 5; i++) {
            const card = await Card.create({ balance });
            await card.save();
        }
        res.status(200)
        res.json({ message: 'Token successfully generated' })
    } catch (error) {
        res.status(400);
        throw new Error(error)
    }
})

const getTokenList = asyncHandler(async (req, res) => {
    const tokens = await Card.find({});
    res.json(tokens);
})

const updateUserBalance = asyncHandler(async (req, res) => {
    const { id, token } = req.body;
    const user = await User.findById(id)
    const tokenValidation = await Card.findById(token);

    if (!tokenValidation) {
        res.status(401);
        throw new Error('Card is not valid')
    } else if (tokenValidation.isUsed) {
        res.status(400);
        throw new Error('Card already used');
    } else {
        res.status(401);
        throw new Error('Card is not valid')
    }
    if (user) {
        user.balance = user.balance + tokenValidation.balance;
        tokenValidation.isUsed = true;
        await tokenValidation.save();
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isSuperAdmin: updatedUser.isSuperAdmin,
            balance: user.balance
        })
    } else {
        res.status(401);
        throw new Error('User not found')
    }
})


const paidUserBalance = asyncHandler(async (req, res) => {
    const { id, amount } = req.body;
    const user = await User.findById(id)
    if (user) {
        user.balance = user.balance - amount;
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isSuperAdmin: updatedUser.isSuperAdmin,
            balance: user.balance
        })
    } else {
        res.status(401);
        throw new Error('User not found')
    }
})

export { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser, updateUserBalance, createToken, getTokenList, paidUserBalance }