const mongoose = require('../configs/connectDB')

const ProductSchema = mongoose.Schema({
  price: Number,
  color: String,
  size: String,
  quantity: Number,
  image: [{ type: String }],
  productCodeId: {
    type: String,
    ref: 'productCode'
  }
},{collection: 'product'})

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel