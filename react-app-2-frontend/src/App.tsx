import "./index.css"
import TaskList from "./components/TaskList/TaskList"

function App() {
   const tasks = [
      {
         task_name: "Task 1",
         task_creation_date: "2022-01-01",
         task_description: "This is a description for task 1.",
         task_due_date: "2022-01-31",
         task_priority: "High",
         task_id: "1",
         task_list_id: "t1",
      },
   ]
   const tasks2 = [
      {
         task_name: "Task 1",
         task_creation_date: "2022-01-01",
         task_description: "This is a description for task 1.",
         task_due_date: "2022-01-31",
         task_priority: "High",
         task_id: "2",
         task_list_id: "t2",
      },
   ]
   const tasks3 = [
      {
         task_name: "Task 1",
         task_creation_date: "2022-01-01",
         task_description: "This is a description for task 1.",
         task_due_date: "2022-01-31",
         task_priority: "High",
         task_id: "3",
         task_list_id: "t3",
      },
   ]
   const tasks4 = [
      {
         task_name: "Task 1",
         task_creation_date: "2022-01-01",
         task_description: "This is a description for task 1.",
         task_due_date: "2022-01-31",
         task_priority: "High",
         task_id: "4",
         task_list_id: "t4",
      },
   ]
   return (
      <div className="flex flex-row gap-5">
         <TaskList
            tasks={tasks}
            task_list_name={"Task List 1"}
            task_list_id={"t1"}
            searchQuery={""}
         />
         <TaskList
            tasks={tasks2}
            task_list_name={"Task List 2"}
            task_list_id={"t2"}
            searchQuery={""}
         />
         <TaskList
            tasks={tasks3}
            task_list_name={"Task List 3"}
            task_list_id={"t3"}
            searchQuery={""}
         />
         <TaskList
            tasks={tasks4}
            task_list_name={"Task List 4"}
            task_list_id={"t4"}
            searchQuery={""}
         />
      </div>
   )
}

export default App
