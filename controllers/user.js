const User = require('../Models/User/index');

const followUser = async (req, res) => {
  const { userId } = req.params;
  
  try {
    const user = await User.findById(req.user.id);
    if (!user.following.includes(userId)) {
      user.following.push(userId);
      await user.save();
    }
    
    res.status(200).json({ message: 'User followed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = { followUser };
