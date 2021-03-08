 const mongoose = require('mongoose')
 const {Schema} = mongoose

 const taskSchema = new Schema({
     title: {
         type: String,
         required: true,
         default: 'Untitled'
     },
     body: {
         type: String,
         required: true,
         minLength: 1
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