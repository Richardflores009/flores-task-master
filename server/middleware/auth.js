const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
    try {
        // Get token
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.SECRET)
    const user = await User.findOne({_id: decoded._id, "tokens.token": token})

    if (!user) {
        throw new Error()
    }

    req.user = user;
    req.token = token;
    next()
    } catch(e) {
        res.status(500).send({error: 'Unable to authenticate'})
    }
    
}

module.exports = auth