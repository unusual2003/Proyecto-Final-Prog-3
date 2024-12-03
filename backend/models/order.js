const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
