import axios from 'axios';

const url = 'http://localhost:3001'

//* user routes
export const signupUser = (userData) => axios.post(`${url}/user`, userData)
export const loginUser = (loginData) => axios.post(`${url}/user/login`, loginData)
export const logoutUser = () => axios.post(`${url}/user/logout`)
export const logoutAllUser = () => axios.post(`${url}/user/logoutAll`)
export const fetchProfile = () => axios.get(`${url}/user/me`)
export const findUser = () => axios.get(`${url}/user/:id`)
export const updateUser = () => axios.patch(`${url}/user/me`)
export const addFriend = () => axios.patch(`${url}/user/addFriend`)
export const DeleteFriend = () => axios.delete(`${url}/me`)

//? room routes
export const createRoom = () => axios.post(`${url}/room`)
export const fetchRoom = () => axios.get(`${url}/room`)
export const fetchOneRoom = () => axios.get(`${url}/room/:id`)
export const UpdateRoom = () => axios.patch(`${url}/room/:id`)
export const deleteRoom = () => axios.delete(`${url}/room/:id`)

//! chat routes
export const createChat = () => axios.post(`${url}/chat`)
export const fetchChat = () => axios.get(`${url}/chat`)
export const fetchOneChat = () => axios.get(`${url}/chat/:id`)
export const UpdateChat = () => axios.patch(`${url}/chat/:id`)
export const deleteChat = () => axios.delete(`${url}/chat/:id`)

//* task routes
export const createTask = () => axios.post(`${url}/tasks`)
export const fetchTask = () => axios.get(`${url}/tasks`)
export const fetchOneTask = () => axios.get(`${url}/tasks/:id`)
export const updateTask = () => axios.patch(`${url}/tasks/:id`)
export const deleteTask = () => axios.delete(`${url}/tasks/:id`)