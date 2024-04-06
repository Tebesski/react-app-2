import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL

const client = axios.create({
   baseURL: baseURL,
})

export default client
