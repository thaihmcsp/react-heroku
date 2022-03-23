const ProductCodeModel = require('../models/productCodeModel')

exports.findAllCode = function (){
  return ProductCodeModel.find()
}

exports.findOneCode = function (code){
  return ProductCodeModel.findOne({code:code})
}

exports.createNewCode = function (code){
  return ProductCodeModel.create(code)
}

exports.deleteOneById = function(id){
  return ProductCodeModel.deleteOne({_id: id})
}