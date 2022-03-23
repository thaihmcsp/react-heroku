const mongoose = require('../configs/connectDB')

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  email: String,
  address: String,
  avatar: [{
    type: String,
    default: '/public/uploads/tree-736885__480.jpg'
  }],
  fullname: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {collection: 'user'})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel