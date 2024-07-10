const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/auth');
const { createPost, getNewsfeed } = require('../controllers/post');
const { followUser } = require('../controllers/user');

// const { protect } = require('../middlewares/authMiddleware');



// Auth routes
router.route('/auth/register').post(registerUser);
router.route('/auth/login').post(loginUser);

// Post routes
router.route('/posts').post(createPost);
router.route('/newsfeed').get(getNewsfeed);

// User routes
router.route('/follow/:userId').post(followUser);

module.exports = router;
