const mongoose = require('mongoose');
const author = require('../model/author');
const schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const Books = new schema({
  bname :{type:String},
  published :{type:String},
  price :{type:String},
  creator:{type:ObjectId,ref:'authors'}
})
module.exports = mongoose.model('Books', Books);