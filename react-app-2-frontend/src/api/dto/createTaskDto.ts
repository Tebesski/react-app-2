export class CreateTaskDto {
   task_name: string
   task_description: string
   task_due_date: string
   task_priority: string
   task_list_id: string
   board_id: string

   constructor(
      task_name: string,
      task_description: string,
      task_due_date: string,
      task_priority: string,
      task_list_id: string,
      board_id: string
   ) {
      this.task_name = task_name
      this.task_description = task_description
      this.task_due_date = task_due_date
      this.task_priority = task_priority
      this.task_list_id = task_list_id
      this.board_id = board_id
   }
}
