const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function () {
      return !this.guestId; 
    },
  },
  guestId: {
    type: String,
    required: function () {
      return !this.userId; 
    },
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
