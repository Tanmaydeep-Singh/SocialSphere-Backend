const mongoose = require('mongoose');

let isConnected = false;

async function connectDatabase() {
  if (isConnected) {
    console.log('Database is already connected');
    return;
  }

  try {
    console.log("hi")
    await mongoose.connect("mongodb+srv://Tanmaydeep:tanmay@cluster1.vcm3w.mongodb.net/social_media_news");
    isConnected = true;
  } catch (error) {
    console.error('Could not connect to the database', error);
    throw error;
  }
}

// Export the connected mongoose instance
module.exports = {
  connectDatabase,
  mongooseInstance: mongoose,
};


