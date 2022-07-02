const mongoose = require('mongoose')
const signupTemplate = new mongoose.Schema({
  username:{
      type: String,
      required:true,
      unique:true,
  },
  password:{
      type:String,
      required:true,
  }, 
  date:{
      type:Date,
      default:Date.now
  },
})

module.exports = mongoose.model('mytable', signupTemplate)