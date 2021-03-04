const express = require('express')
const router = express.Router()
const Chat = require('../models/Chat')

router.post('/chat', async (req, res) => {
    try {
        const chat = await Chat(req.body)
        await chat.save()
        res.send(chat)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/chat', async (req, res) => {
    try {
        const chat = await Chat.find({})
        res.send(chat)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/chat/:id', async (req, res) => {
    const id = req.params.id
    try {
        const chat = await Chat.findById(id)
        await chat.save()
        res.send(chat)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/chat/:id', async (req, res) => {
    const id = req.params.id
    try {
        const chat = await Chat.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        chat.save()
        res.send(chat)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/chat/:id', async (req, res) => {
    const id = req.params.id
    try {
        const chat = await Chat.findByIdAndDelete(id)
        res.send(chat)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router