const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const PORT = 5010; // You can change this port if needed

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://SwaRojgarBU:SwaRojgar@cluster0.xhac0.mongodb.net/'; // Replace with your actual MongoDB connection string

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

// Signup route
app.post('/signup', async (req, res) => {
    // Destructure fields from req.body
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // Create a new User instance
    const newUser = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
        console.log("REGISTERED");
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).json({ message: 'Error saving user data', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
