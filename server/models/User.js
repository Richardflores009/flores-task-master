const mongoose = require('mongoose')
const {Schema} = mongoose
const Task = require('./Task')
const Chat = require('./Chat')
const Room = require('./Room')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: {
            validator:  validator.isEmail,
            message: `Is not a valid email`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: validator.isStrongPassword,
            message: 'Must contain 8 characters, 1 lowercase, 1 uppercase and 1 symbol'
        },
        trim: true
    },
    friends: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
})

userSchema.pre('save', async function(next) {

    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


userSchema.methods.generateJWT = async function(cb) {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.compareCredentials = async function(email, password) {
    const user = await this.findOne({email: email})
    console.log('user',user)
   
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            return user
        } 
}

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({owner: user._id})
    await Chat.deleteMany({owner: user._id})
    await Room.updateMany({"owner": user._id}, {"$set": {"owner": "603840d5022e3d659ff2e3ce"}}, {"multi": true})
    // await Room.updateMany({ }, {"$pull": {"owner": {_id: user._id}}}, {"multi": true, new: true})
    // await user.model('Room').updateMany({ }, {"$pull": {owner: user._id}}, {"multi": true},next)
    await user.model('User').updateMany({ }, {"$pull": {"friends": {_id: user._id}}}, {"multi": true}, next)

    next()
})



const User = mongoose.model('User', userSchema)


module.exports = User;