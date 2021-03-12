import { combineReducers } from 'redux'

import userReducers from './user'
import taskReducers from './task'
import roomReducers from './room'
import chatReducers from './chat'

export default combineReducers({
    user: userReducers,
    task: taskReducers,
    room: roomReducers,
    chat: chatReducers
})