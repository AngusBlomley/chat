const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
require('dotenv').config();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        await newUser.save();

        res.status(201).json({message: 'User created successfully...'});

    } catch (err) {
         if (err.code === 11000 && err.keyPattern?.email) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        console.error(err);
        res.status(500).json({ error: "Something went wrong..."})
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({error: 'Invalid Credentials'});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '7d'}
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
              _id: user._id,
              username: user.username,
              email: user.email,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;