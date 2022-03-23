const UserModel = require('../models/userModel')

function createUser (userInfo){
  return UserModel.create(userInfo)
}

function findOneByUsername(username){
  return UserModel.findOne({username})
}

module.exports = {createUser, findOneByUsername}