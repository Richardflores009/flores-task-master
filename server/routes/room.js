const express = require('express')
const router = express.Router()
const Room = require('../models/Room')
const auth = require('../middleware/auth')

router.post('/room', auth, async (req, res) => {
    try {
        const room = await Room({owner: req.user._id, ...req.body})
        await room.save()
        res.send(room)
    } catch (e) {
        res.status(500).send()
    }
})

// router.get('/room', auth, async (req, res) => {
//     try {
//         const room = await Room
//         .find({owner: req.user._id})
//         // .populate('owner')
//         // .populate('messages.message')
//         // .populate('users.user')

//         if (!room) {
//             res.status(404).send({error: 'No room by that name found'})
//         }

//         res.send(room)
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })
router.get('/room', async (req, res) => {
    try {
        const room = await Room.find({})

        if (!room) {
            res.status(404).send({error: 'No room by that name found'})
        }

        res.send(room)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/room/:id', async (req, res) => {
    const _id = req.params._id
    try {
        const room = await Room.findById(_id)
        // .find({owner: req.user._id})
        // .populate('owner')
        // .populate('messages.message')
        // .populate('users.user')
        
        console.log(room)
        if (!room) {
            res.status(404).send({error: 'No room by that name found'})
        }

        res.send(room)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/room/:id', auth, async (req, res) => {
    const id = req.params.id
    const keys = Object.keys(req.body)
    const isValid = ['roomName', 'owner', 'messages', 'users']
    const isValidOperation = keys.every((key) => isValid.includes(key))
    if (!isValidOperation) {
        return res.status(401).send()
    }

    try {
        const room = await Room.findByIdAndUpdate(id, {$push: {...req.body}}, {new:true, runValidators:true})
        if (!room) {
            return res.status(404).send()
        }
        await room.save()
        res.send(room)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/room/:id', auth, async (req, res) => {
    try {
        const room = await Room.findOneAndUpdate({owner: req.user._id})
        if (!room) {
            return res.status(404).send()
        }
        await room.remove()
        res.send(room)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router