import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskPriority } from '../types/TaskPriority.enum';
import { TaskListService } from '../task_list/task_list.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TaskController', () => {
  let controller: TaskController;

  const fixedTimestamp = Date.now().toString();
  const fixedDate = new Date(fixedTimestamp);

  const mockTaskService = {
    getTasks: jest.fn(() => [
      {
        task_id: '1',
        board_id: '1',
        task_list_id: '1',
        task_name: 'Test task',
        task_description: 'Test description',
        task_due_date: fixedTimestamp,
        task_priority: 'Low',
        task_creation_time: fixedTimestamp,
      },
      {
        task_id: '2',
        board_id: '2',
        task_list_id: '2',
        task_name: 'Test task 2',
        task_description: 'Test description 2',
        task_due_date: fixedDate,
        task_priority: 'Medium',
        task_creation_time: fixedTimestamp,
      },
    ]),

    getTaskById: jest.fn((id) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_due_date: '12/12/2021',
      task_priority: 'Low',
      task_creation_time: '12/12/2021',
    })),

    deleteTaskById: jest.fn((id) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_due_date: fixedDate,
      task_priority: 'Low',
      task_creation_time: fixedTimestamp,
    })),

    createTask: jest.fn((createTaskDto) => ({
      task_id: fixedTimestamp,
      ...createTaskDto,
    })),

    updateTaskPriority: jest.fn((id, updateTaskPriorityDto) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_due_date: fixedDate,
      task_creation_time: fixedTimestamp,
      ...updateTaskPriorityDto,
    })),

    updateTaskName: jest.fn((id, updateTaskNameDto) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_description: 'Test description',
      task_due_date: '12/12/2021',
      task_priority: 'Low',
      task_creation_time: '12/12/2021',
      ...updateTaskNameDto,
    })),

    updateTaskDescription: jest.fn((id, updateTaskDescriptionDto) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_due_date: fixedDate,
      task_priority: 'Low',
      task_creation_time: fixedTimestamp,
      ...updateTaskDescriptionDto,
    })),

    updateTaskDueDate: jest.fn((id, updateTaskDueDateDto) => ({
      task_id: id,
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_priority: 'Low',
      task_creation_time: fixedTimestamp,
      ...updateTaskDueDateDto,
    })),

    updateTaskList: jest.fn((id, updateTaskListIdDto) => ({
      task_id: id,
      board_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_due_date: fixedDate,
      task_priority: 'Low',
      task_creation_time: fixedTimestamp,
      ...updateTaskListIdDto,
    })),
  };

  const mockTaskListRepository = {};

  // CONFIGURE TEST MODULE //
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
        {
          provide: getRepositoryToken(TaskListService),
          useValue: mockTaskListRepository,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });
  // ************************************************ //

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all tasks', async () => {
    expect(await controller.getTasks()).toEqual(mockTaskService.getTasks());
  });

  it('should get a task by id', async () => {
    const taskId = '1';
    expect(await controller.getTaskById(taskId)).toEqual(
      mockTaskService.getTaskById(taskId),
    );
  });

  it('should delete a task by id', async () => {
    const taskId = '1';
    expect(await controller.deleteTaskById(taskId)).toEqual(
      mockTaskService.deleteTaskById(taskId),
    );
  });

  it('should create a task', async () => {
    expect(
      await controller.createTask({
        board_id: '1',
        task_list_id: '1',
        task_name: 'Test task',
        task_description: 'Test description',
        task_due_date: '12/12/2021',
        task_priority: TaskPriority.LOW,
      }),
    ).toEqual(
      mockTaskService.createTask({
        board_id: '1',
        task_list_id: '1',
        task_name: 'Test task',
        task_description: 'Test description',
        task_due_date: '12/12/2021',
        task_priority: TaskPriority.LOW,
      }),
    );
  });

  it('should update task priority', async () => {
    const taskId = '1';
    const updateTaskPriorityDto = { task_priority: TaskPriority.HIGH };
    expect(
      await controller.updateTaskPriority(taskId, updateTaskPriorityDto),
    ).toEqual(
      mockTaskService.updateTaskPriority(
        taskId,
        updateTaskPriorityDto.task_priority,
      ),
    );
  });

  it('should update task name', async () => {
    const taskId = '1';
    const updateTaskNameDto = { task_name: 'Updated task' };
    expect(await controller.updateTaskName(taskId, updateTaskNameDto)).toEqual(
      mockTaskService.updateTaskName(taskId, updateTaskNameDto.task_name),
    );
  });

  it('should update task description', async () => {
    const taskId = '1';
    const updateTaskDescriptionDto = {
      task_description: 'Updated description',
    };
    expect(
      await controller.updateTaskDescription(taskId, updateTaskDescriptionDto),
    ).toEqual(
      mockTaskService.updateTaskDescription(
        taskId,
        updateTaskDescriptionDto.task_description,
      ),
    );
  });

  it('should update task due date', async () => {
    const taskId = '1';
    const updateTaskDueDateDto = { task_due_date: Date.now().toString() };
    expect(
      await controller.updateTaskDueDate(taskId, updateTaskDueDateDto),
    ).toEqual(
      mockTaskService.updateTaskDueDate(
        taskId,
        updateTaskDueDateDto.task_due_date,
      ),
    );
  });

  it('should update task list id', async () => {
    const taskId = '1';
    const updateTaskListIdDto = { task_list_id: '2' };
    expect(
      await controller.updateTaskListId(taskId, updateTaskListIdDto),
    ).toEqual(
      mockTaskService.updateTaskList(taskId, updateTaskListIdDto.task_list_id),
    );
  });
});
