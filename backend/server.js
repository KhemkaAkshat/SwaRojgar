const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const User = require('./models/User');
const Post = require('./models/Post');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = 5010;

// Use CORS middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://SwaRojgarBU:SwaRojgar@cluster0.xhac0.mongodb.net';
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save images in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save images with a timestamp to avoid overwriting
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Use the post routes
app.use('/api/posts', postRoutes);

// Signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, userType } = req.body;

    const newUser = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        userType
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

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ 
                message: 'Login successful', 
                userType: user.userType 
            });
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
