import axios from 'axios';

const url = 'http://localhost:3001'

export const loginUser = () => axios.post(`${url}/login`)
export const fetchProfile = () => axios.get(`${url}/me`)