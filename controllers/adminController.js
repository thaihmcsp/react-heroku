const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const {createUser, findOneByUsername} = require('../services/userServices')
require('dotenv').config()
const pass = process.env.jwt

async function adminLogin (req,res){
  try {
    const email = req.body.email
    const password = req.body.password
    if(email && password){
      const checkUser = await findOneByUsername(email)
      if(checkUser){
        if(checkUser.role === 'admin'){
          const checkPass = await bcrypt.compare(password, checkUser.password)
          if(checkPass){
            const token = jwt.sign({_id: checkUser._id}, pass, {expiresIn: 7 * 24 * 3600})
            delete checkUser.password
            res.json({status:200, mess:'login thanh cong', token, user:checkUser})
          }else{
            res.json({status:400, mess:'sai password'})
          }
        }else{
          res.json({status:400, mess:'khong co quyen truy cap admin'})
        }
      }else{
        res.json({status:400, mess:'sai email'})
      }
    }else{
      res.json({status:400, mess:'vui long nhap email, password'})
    }
  } catch (error) {
    console.log(error);
    res.json({status:500, mess:'server loi', error})
  }
}

module.exports = {adminLogin}