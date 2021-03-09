const mongoose = require('mongoose')
const {Schema} = mongoose

const chatSchema = new Schema({
    message: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
})

const Chat = mongoose.model('Chat', chatSchema)


module.exports = Chat;