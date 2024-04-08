import axios from "axios"

const baseURL = process.env.API_URL || process.env.VITE_API_URL

const client = axios.create({
   baseURL: baseURL,
})

export default client
