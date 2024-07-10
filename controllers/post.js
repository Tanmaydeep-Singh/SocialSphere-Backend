const Post = require('../Models/Post/index');
const User = require('../Models/User/index');

const createPost = async (req, res) => {
  const { content } = req.body;
  
  try {
    const post = new Post({ user: req.user.id, content });
    await post.save();
    
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNewsfeed = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('following');
    
    const followingIds = user.following.map(follow => follow._id);
    const posts = await Post.find({ user: { $in: followingIds } })
      .sort({ createdAt: -1 })
      .populate('user', 'username avatar')
      .exec();
    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getNewsfeed };
