const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
require('dotenv').config()
const pass = process.env.jwt

async function checkLogin(req,res,next){
  try {
    const token = req.headers.authorization
    if(token){
      const id = jwt.verify(token, pass)._id
      const checkUser = await UserModel.findOne({_id:id})
      if(checkUser){
        next()
      }else{
        res.json({staus:400, mess:'token khong hop le'})
      }
    }else{
      res.json({status:400, mess:'vui long dang nhap'})
    }
  } catch (error) {
    res.json({status:500, mess:'server loi'})
  }
}

module.exports = {checkLogin}