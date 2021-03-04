const express = require('express')
const app = express()
require('./db/mongoose');

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const chatRoutes = require('./routes/chat')

const port = process.env.PORT

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
app.use(chatRoutes)


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

