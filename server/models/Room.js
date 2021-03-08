const mongoose = require('mongoose')
const {Schema} = mongoose

const roomSchema = new Schema({
    roomName: {
        type: String,
        trim: true,
        default: 'Untitled'
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
    },
    users: [{
        user: {
            type: Schema.Types.ObjectId,
            unique: true,
            ref: 'User'
        }
    }],
    messages: [{
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        }
    }]
})


const User = mongoose.model('Room', roomSchema)

module.exports = User