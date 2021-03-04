const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.send(user)

    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/user', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/user/:id', async (req, res) => {
    const id = req.params.id
    if (req.body.password) {

        req.body.password = await bcrypt.hash(req.body.password, 8)
    }
   
    
    try {
        const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const user = await User.findByIdAndDelete(id)
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router;