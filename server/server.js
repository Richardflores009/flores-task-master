const express = require('express')
const app = express()
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer)
require('./db/mongoose');

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const chatRoutes = require('./routes/chat')
const roomRoutes = require('./routes/room')

const port = process.env.PORT

app.use(express.json())
app.use(express.static('public'))
app.use(userRoutes)
app.use(taskRoutes)
app.use(chatRoutes)
app.use(roomRoutes)

// app.get('/', (req, res) => {
//     res.send('hello')
// })
 


httpServer.listen(port, () => {
    console.log(`listening on port ${port}`)
})

io.on('connection', (socket) => { 
    socket.broadcast.emit('message', 'new user connected')
    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('message', 'user disconnected')
    })
});


