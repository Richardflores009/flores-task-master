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

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e){
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findById(id)
        if (!task) {
            return new Error({error: 'No task found'})
        }
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        const tasks = await Task.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        if (!tasks) {
            return new Error({error: 'No tasks found'})
        }
        await tasks.save()
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(id)
        task.save()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})



module.exports = router