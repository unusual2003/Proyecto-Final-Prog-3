const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./database');
const orderRoutes = require('./routes/orders');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Green Salad App API!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


console.log("Mongo URI:", process.env.MONGO_URI);
