
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name : {type:String},   
    email   : {type:String,required:true,unique:true},
    password : {type:String,required:true},
})

const employees = mongoose.model('user',user);

module.exports = employees;