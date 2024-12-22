const mongoose = require('mongoose');

// Define the schema for the Order
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  trackingId: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required:true,
  },
  price: {
    type: Number,
    required: true
  },
  productsOrdered: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true
  }],
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create and export the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
