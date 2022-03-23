const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nodemy:nodemy1234@cluster0.10m5w.mongodb.net/testhero?retryWrites=true&w=majority');

module.exports = mongoose
