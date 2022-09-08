const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const authors= new schema({
  author : {type : String},
  age : {type : String},
  dob : {type : String}

})
module.exports = mongoose.model('authors', authors);

