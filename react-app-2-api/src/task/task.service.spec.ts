import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskPriority } from '../types/TaskPriority.enum';
import TaskList from '../task_list/task_list.entity';
import { TaskListService } from '../task_list/task_list.service';

describe('TaskService', () => {
  let service: TaskService;

  const mockTaskRepository = {
    find: jest.fn(() => Promise.resolve([])),
    findOne: jest.fn((options) => {
      const task = new Task();
      task.task_id = options.where.task_id;
      task.task_name = 'task_name';
      task.task_description = 'task_description';
      task.task_due_date = '2022-12-12';
      task.task_priority = TaskPriority.LOW;
      task.task_creation_time = new Date().toISOString();
      return Promise.resolve(task);
    }),
    remove: jest.fn((task) => Promise.resolve(task)),
    create: jest.fn((dto) => {
      const task = new Task();
      task.task_id = '1';
      task.board_id = dto.board_id;
      task.task_list_id = dto.task_list_id;
      task.task_name = dto.task_name;
      task.task_description = dto.task_description;
      task.task_due_date = dto.task_due_date;
      task.task_priority = dto.task_priority;
      task.task_creation_time = new Date().toISOString();
      return task;
    }),
    save: jest.fn((task) => Promise.resolve(task)),
  };

  const mockTaskListRepository = {};
  const mockTaskListService = {
    getTaskListById: jest.fn(() => Promise.resolve(new TaskList())),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository,
        },
        {
          provide: getRepositoryToken(TaskList),
          useValue: mockTaskListRepository,
        },
        {
          provide: TaskListService,
          useValue: mockTaskListService,
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all tasks', async () => {
    const result = await service.getTasks();
    expect(result).toEqual([]);
    expect(mockTaskRepository.find).toHaveBeenCalled();
  });

  it('should get a task by id', async () => {
    const result = await service.getTaskById('1');
    expect(result).toBeInstanceOf(Task);
    expect(mockTaskRepository.findOne).toHaveBeenCalledWith({
      where: { task_id: '1' },
    });
  });

  it('should delete a task by id', async () => {
    const result = await service.deleteTaskById('1');
    expect(result).toEqual({ task_name: 'task_name', task_id: '1' });
    expect(mockTaskRepository.remove).toHaveBeenCalled();
  });

  it('should create a task', async () => {
    const createTaskDto = {
      board_id: '1',
      task_list_id: '1',
      task_name: 'Test task',
      task_description: 'Test description',
      task_due_date: '2022-12-12',
      task_priority: TaskPriority.LOW,
    };
    const result = await service.createTask(createTaskDto);
    expect(result).toBeInstanceOf(Task);
    expect(mockTaskRepository.create).toHaveBeenCalledWith(createTaskDto);
  });
});
