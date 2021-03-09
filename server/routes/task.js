const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req, res) => {
    const userId = req.user._id
    try {
        const task = await Task({owner: userId, ...req.body})
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e){
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findOne({_id:id, owner: req.user._id})
        if (!task) {
            return res.status(404).send({error: 'no task found'})
        }
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const id = req.params.id
    try {
        const tasks = await Task.findOneAndUpdate({_id: id, owner: req.user._id}, req.body, {new: true, runValidators: true})
        if (!tasks) {
            return res.status(404).send({error: 'No tasks found'})
        }
        await tasks.save()
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findOne({_id, owner: req.user._id})
        if (!task) {
            return res.status(404).send({error: 'No task to remove'})
        }
        await task.remove()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})



module.exports = router