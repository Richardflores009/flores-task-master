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


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
 

httpServer.listen(port, () => {
    console.log(`listening on port ${port}`)
})

