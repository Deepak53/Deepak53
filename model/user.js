
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name : {type:String},   
    email   : {type:String,required:true},
    password : {type:String,required:true},
})

module.exports = mongoose.model('user',user);
