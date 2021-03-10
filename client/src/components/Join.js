import React, { useEffect, useState } from 'react'

import {io} from 'socket.io-client'

const socket = io.connect('http://localhost:3001', {transports: ['websocket']})
function Join(){
    const [message, setMessage] = useState('')

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connect to socketio')
        })
        socket.on('message', (message) => {
            console.log(message)
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', message)
    }
 
        return (
            <div >
                <h1>{message}</h1>
                <form onSubmit={handleSubmit}>
                    <input value={message} onChange={e => setMessage(e.target.value)} />
                    <input type="submit" value="submit"/>
                </form>
    
            </div>  
        )

}

export default Join;