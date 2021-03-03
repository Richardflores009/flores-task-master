const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send({user: 'Hello nerd'})
})


module.exports = router;