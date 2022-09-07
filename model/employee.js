
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeedata = new schema({
    firstName : {type:String},
    lastName : {type:String},
    email   : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    phone    : {type:String,unique:true},
    
})

const employees = mongoose.model('employeedata',employeedata);

module.exports = employees;