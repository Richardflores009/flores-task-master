const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send({chat: 'chhhatttt'})
})



module.exports = router