const mongoose = require('mongoose')
const {Schema} = mongoose

const chatSchema = new Schema({
    message: {
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

const Chat = mongoose.model('Chat', chatSchema)


module.exports = Chat;