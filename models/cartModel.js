const mongoose = require('../configs/connectDB')

const CartSchema = mongoose.Schema({
  userId: {
    type: String,
    ref: 'user'
  },
  listProduct:[{
    productId: {
      type: String,
      ref: 'product'
    },
    quantity: Number
  }]
},{ collection: 'cart'})

const CartModel = mongoose.model('cart', CartSchema)

module.exports = CartModel