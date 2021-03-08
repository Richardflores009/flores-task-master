const mongoose = require('mongoose')
const {Schema} = mongoose
const Task = require('./Task')
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
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
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

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        new Error({error: 'Unable to login'})
    }

    return user

}

userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({owner: user._id})

    next()
})


const User = mongoose.model('User', userSchema)


module.exports = User;