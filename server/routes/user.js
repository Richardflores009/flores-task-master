const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const auth = require('../middleware/auth')


router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        const token = await user.generateJWT()
        await user.save()
        res.send({user, token})

    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/user/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await User.compareCredentials(email, password)
    const token = await user.generateJWT()
    try {
        await user.save()
        res.send({user, token})

    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/user/logout',auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/user/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        req.user.save()
        res.send()
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/user/me', auth, async (req, res) => {
    try {
        const user = req.user
        if (!user) {
            res.status(404).send('No user found')
        }
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

router.patch('/user/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const validEntry = ['firstName', 'lastName', 'email', 'password']
    const validOperation = updates.every((entry) => validEntry.includes(entry))

    if (!validOperation) {
        return res.status(404).send({error: 'Not valid entry'})
    }

    
    try {
        updates.forEach(update =>  req.user[update] = req.body[update]);
        
        await req.user.save()
        res.send(req.user)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/user/me', auth, async (req, res) => {
    const user = req.user
    
    try {
        await user.remove()
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router;