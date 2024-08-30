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

app.post('/login',async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ message: 'Login successful' });
            console.log("LOGIN SUCCESSFUL");
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
            console.log("LOGIN FAILED");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Error during login', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
