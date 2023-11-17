const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      const parkingSpaceCollection = conn.connection.collection('parkingspaces');
      await parkingSpaceCollection.createIndex({ location: '2dsphere' });
      console.log(`Database Connected`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  
module.exports = connectDB;
