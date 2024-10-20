const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    userType: { type: String, enum: ['client', 'freelancer'], required: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String } // Optional image field
});

// The second argument specifies the collection name
const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;