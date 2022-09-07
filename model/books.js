const mongoose = require('mongoose');
const employees = require('./employee');
const schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const Books = new schema({
  author:{type:String},
  category:{type:String},
  title:{type:String},
  creator:{type:ObjectId,ref:'employeedata'}
})
module.exports = mongoose.model('Books', Books);