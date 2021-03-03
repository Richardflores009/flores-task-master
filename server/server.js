const express = require('express')
const app = express()


const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const chatRoutes = require('./routes/chat')

const port = process.env.PORT

app.use('/user', userRoutes)
app.use('/task', taskRoutes)
app.use('/chat', chatRoutes)


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})