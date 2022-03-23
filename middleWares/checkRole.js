const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
require('dotenv').config()
const pass = process.env.jwt

async function checkAdmin (req,res,next){
  try {
    const token = req.headers.authorization
    if(token){
      const id = jwt.verify(token, pass)._id
      const checkUser = await UserModel.findOne({_id:id})
      if(checkUser && checkUser.role === 'admin'){
        req.user = checkUser
        next()
      }else{
        res.json({status:400, mess:'token khong hop le'})
      }
    }else{
      res.json({status:400, mess:'vui long dang nhap'})
    }
  } catch (error) {
    res.json({status:500, mess:'loi server'})
  }
}

module.exports = {checkAdmin}