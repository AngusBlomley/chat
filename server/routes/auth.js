const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/User');

const router = express.Router();

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
        console.error(err);
        res.status(500).json({ error: "Something went wrong..."})
    }
})

module.exports = router;