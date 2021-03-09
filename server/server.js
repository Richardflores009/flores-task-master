const express = require('express')
const app = express()
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer)
require('./db/mongoose');

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const chatRoutes = require('./routes/chat')
const roomRoutes = require('./routes/room')

const port = process.env.PORT

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
app.use(chatRoutes)
app.use(roomRoutes)
 
io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
    socket.emit('connection', null);
});

httpServer.listen(port, () => {
    console.log(`listening on port ${port}`)
})



