const bcrypt = require('bcrypt')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const {createUser, findOneByUsername} = require('../services/userServices')
require('dotenv').config()
const pass = process.env.jwt

async function createNewUser (req,res){
  try {
    const username = req.body.username
    const password = req.body.password
    if(username && password){
      const checkUser = await findOneByUsername(username)
      if(checkUser){
        res.json({status:400, mess:'user da ton tai'})
      }else{
        req.body.password = await bcrypt.hash(password, 10)
        const newUser = await createUser(req.body)
        res.json({data:newUser, status:200, mess:'tao tk thanh cong'})
      }
    }else{
      res.json({status:400, mess:'vui long dien email, password'})
    }
  } catch (error) {
    res.json({status:500, mess:'server loi', error})
  }
}

async function loginUser (req,res){
  try {
    const email = req.body.email
    const password = req.body.password
    if(email && password){
      const check = await findOneByUsername(email)
      if(check){
        const checkPass = await bcrypt.compare(password, check.password)
        if(checkPass){
          const token = jwt.sign({_id: check._id}, pass, {expiresIn: 7 * 24 * 3600})
          delete check.password
          res.json({status:200, mess:'login thanh cong', token})
        }else{
          res.json({status:400, mess:'sai password'})
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

module.exports = {createNewUser, loginUser}