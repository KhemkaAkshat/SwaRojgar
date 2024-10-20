const express = require('express');
const multer = require('multer');
const path = require('path');
const Post = require('../models/Post');

const router = express.Router();

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Filename format
    }
});

const upload = multer({ storage: storage });

// Create post route with image upload
router.post('/', upload.single('image'), async (req, res) => {
    const { userId, title, content, userType } = req.body;
    const imagePath = req.file ? `uploads/${req.file.filename}` : null; // Get the image path

    const newPost = new Post({
        userId,
        title,
        content,
        userType,
        image: imagePath // Ensure this is a relative path
    });

    try {
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
});
// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find(); // Fetch all posts from the database
        res.status(200).json(posts); // Return the posts as JSON
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: 'Error fetching posts', error: error.message });
    }
});


module.exports = router;