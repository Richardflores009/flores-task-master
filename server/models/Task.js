 const mongoose = require('mongoose')
 const {Schema} = mongoose

 const taskSchema = new Schema({
     title: {
         type: String,
         required: true
     },
     body: {
         type: String,
         required: true
     },
     owner: {
         type: Schema.Types.ObjectId,
         required: true,
         unique: true,
         ref: 'User'
     }
 })

 const Task = mongoose.model('Task', taskSchema)


 module.exports = Task;