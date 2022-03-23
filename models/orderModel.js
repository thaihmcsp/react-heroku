const mongoose = require('../configs/connectDB')

const OrderSchema = mongoose.Schema({
  userId: {
    type: String,
    ref: 'user'
  },
  listProduct: [{
    productId: {
      type: String,
      ref: 'product'
    },
    quantity: Number
  }],
  address: String,
  phone: String,
  status: {
    type: String,
    enum: ['pending', 'canceled', 'done'],
    default: 'pending'
  }
},{collection: 'order'})

const OrderModel = mongoose.model('order', OrderSchema)

module.exports = OrderModel