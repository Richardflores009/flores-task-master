const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

const User = mongoose.model('User', userSchema)


module.exports = User;