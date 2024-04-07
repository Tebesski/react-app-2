import TaskBoard from "./components/TaskBoard/TaskBoard"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <TaskBoard />
      </QueryClientProvider>
   )
}

export default App
