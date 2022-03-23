const mongoose = require('../configs/connectDB')

const ProductCodeSchema = mongoose.Schema({
  code: String,
  name: String,
  description: [{
    key: String,
    value: String
  }],
  img: [{type: String}]
}, {collection: 'productCode'})

const ProductCodeModel = mongoose.model('productCode', ProductCodeSchema)

module.exports = ProductCodeModel