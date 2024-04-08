import {
  Logger,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { TaskPriority } from '../types/TaskPriority.enum';
import { Task } from './task.entity';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskListService } from '../task_list/task_list.service';

/* ====================================================================== */

@Injectable()
export class TaskService {
  private logger = new Logger(`TaskService`, { timestamp: true });

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @Inject(TaskListService)
    private taskListService: TaskListService,
  ) {}

  /* GET ALL TASKS */
  public async getTasks(): Promise<Task[]> {
    try {
      const tasks = await this.taskRepository.find({
        order: {
          task_creation_time: 'DESC',
        },
      });
      return tasks;
    } catch (error) {
      this.logger.error(`Failed to fetch tasks.`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  /* GET A TASK BY ID */
  public async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({
      where: {
        task_id: id,
      },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID: ${id} -- WAS NOT FOUND!`);
    }

    return found;
  }

  /* DELETE A TASK */
  public async deleteTaskById(
    id: string,
  ): Promise<{ task_name: string; task_id: string }> {
    const found = await this.getTaskById(id);

    const { task_name, task_id } = found;
    const removed = await this.taskRepository.remove(found);

    if (!removed) {
      throw new NotFoundException(
        `Task card with ID: ${id} _apparently_ was found, since "getTaskById" provides the validation, BUT something went wrong.`,
      );
    }

    return { task_name, task_id };
  }

  /* CREATE A TASK */
  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const {
      task_name,
      task_description,
      task_due_date,
      task_priority,
      task_list_id,
      board_id,
    } = createTaskDto;

    const taskList = await this.taskListService.getTaskListById(task_list_id);

    if (!taskList) {
      this.logger.error(`Task list with ID: ${task_list_id} -- WAS NOT FOUND!`);
      throw new NotFoundException(
        `Task list with ID: ${task_list_id} -- WAS NOT FOUND!`,
      );
    }

    const newTask = this.taskRepository.create({
      task_name,
      task_list_id,
      task_description,
      task_due_date,
      task_priority,
      board_id,
    });

    await this.taskRepository.save(newTask);

    return newTask;
  }

  /* UPDATE TASK PRIORITY */
  public async updateTaskPriority(
    id: string,
    newPriority: TaskPriority,
  ): Promise<Task> {
    const task = await this.getTaskById(id);
    task.task_priority = newPriority;
    await this.taskRepository.save(task);

    return task;
  }

  /* UPDATE TASK DESCRIPTION */
  public async updateTaskDescription(
    id: string,
    newDescription: string,
  ): Promise<Task> {
    const task = await this.getTaskById(id);
    task.task_description = newDescription;
    await this.taskRepository.save(task);

    return task;
  }

  /* UPDATE TASK NAME */
  public async updateTaskName(id: string, newName: string): Promise<Task> {
    const task = await this.getTaskById(id);
    task.task_name = newName;
    await this.taskRepository.save(task);

    return task;
  }

  /* UPDATE TASK LIST ID */
  public async updateTaskList(
    id: string,
    new_task_list_id: string,
  ): Promise<Task> {
    const taskList =
      await this.taskListService.getTaskListById(new_task_list_id);

    if (!taskList)
      throw new NotFoundException(
        `Task list with ID: ${new_task_list_id} -- WAS NOT FOUND!`,
      );

    const task = await this.getTaskById(id);

    task.task_list_id = new_task_list_id;
    await this.taskRepository.save(task);

    return task;
  }

  /* UPDATE TASK DUE DATE */
  public async updateTaskDueDate(id: string, newDate: string): Promise<Task> {
    const task = await this.getTaskById(id);
    task.task_due_date = newDate;
    await this.taskRepository.save(task);

    return task;
  }
}
