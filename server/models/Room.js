const mongoose = require('mongoose')
const {Schema} = mongoose
const Chat = require('./Chat')

const roomSchema = new Schema({
    roomName: {
        type: String,
        trim: true,
        default: 'Untitled'
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    users: [{
        user: {
            type: Schema.Types.ObjectId,
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

roomSchema.pre('remove', async function(next) {
    const room = this

    await Chat.deleteMany({room: room._id})
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room