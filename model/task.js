const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const task = new schema({
  employeeId : {
    type: ObjectId,
    ref: 'employeeSchema'
  },
  tasks:{type:String}

})
const Task = mongoose.model('tasks', task);

module.exports = Task;
