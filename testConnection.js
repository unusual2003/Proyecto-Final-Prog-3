const mongoose = require('mongoose');
require('dotenv').config();

const testDBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
    mongoose.connection.close(); // Cierra la conexión después de probar
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

testDBConnection();
