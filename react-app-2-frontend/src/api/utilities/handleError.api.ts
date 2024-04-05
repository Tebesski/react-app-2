import axios, { AxiosError } from "axios"

export default function handleError(error: Error | AxiosError) {
   if (axios.isAxiosError(error)) {
      console.error(error.response?.data)
      console.error(error.response?.status)
      console.error(error.response?.headers)
   } else {
      console.error(error.message)
   }
   throw error
}
