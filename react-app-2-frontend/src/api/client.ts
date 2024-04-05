import axios from "axios"

const client = axios.create({
   baseURL: process.env.API_URL || import.meta.env.VITE_API_URL,
})

export default client
