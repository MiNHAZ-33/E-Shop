import asyncHandler from 'express-async-handler';

import User from "../model/userModel.js";

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

export {authUser}