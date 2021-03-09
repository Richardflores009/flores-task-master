import React, { Component } from 'react'
import socketClient  from "socket.io-client";
import logo from './logo.svg';
import './App.css';
const SERVER = 'http://localhost:3001/'

function App() {
  const socket = socketClient(SERVER)
  socket.on('connection', () => {
    console.log("I'm connected with the back-end")
  })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          {/* // Render the newly fetched data inside of this.state.data  */}
          {/* <p className="App-intro">{this.state.data}</p> */}
      </div>
    );
}

export default App;
