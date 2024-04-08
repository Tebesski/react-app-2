import { Test, TestingModule } from '@nestjs/testing';
import { TaskListService } from './task_list.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import TaskList from './task_list.entity';

describe('TaskListService', () => {
  let service: TaskListService;

  const mockTaskListRepository = {
    find: jest.fn().mockImplementation(() => [
      {
        task_list_id: '1',
        task_list_name: 'Task List 1',
        board_id: '1',
      },
      {
        task_list_id: '2',
        task_list_name: 'Task List 2',
        board_id: '2',
      },
    ]),
    findOne: jest.fn().mockImplementation((conditions) => {
      if (conditions.where.task_list_id) {
        return Promise.resolve({
          task_list_id: conditions.where.task_list_id,
          task_list_name: 'Task List',
          board_id: '1',
        });
      }
      return null;
    }),
    create: jest.fn().mockImplementation((createTaskListDto) => {
      return {
        task_list_id: Date.now().toString(),
        ...createTaskListDto,
      };
    }),
    save: jest.fn().mockImplementation((taskList) => Promise.resolve(taskList)),
    remove: jest
      .fn()
      .mockImplementation((taskList) => Promise.resolve(taskList)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskListService,
        {
          provide: getRepositoryToken(TaskList),
          useValue: mockTaskListRepository,
        },
      ],
    }).compile();

    service = module.get<TaskListService>(TaskListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all lists', async () => {
    const result = await service.getLists();
    expect(result).toEqual([
      {
        task_list_id: '1',
        task_list_name: 'Task List 1',
        board_id: '1',
      },
      {
        task_list_id: '2',
        task_list_name: 'Task List 2',
        board_id: '2',
      },
    ]);
    expect(mockTaskListRepository.find).toHaveBeenCalled();
  });

  it('should get task list by id', async () => {
    const result = await service.getTaskListById('1');
    expect(result).toEqual({
      task_list_id: '1',
      task_list_name: 'Task List',
      board_id: '1',
    });
    expect(mockTaskListRepository.findOne).toHaveBeenCalledWith({
      where: { task_list_id: '1' },
    });
  });

  it('should get task list by board id', async () => {
    const result = await service.getTaskListByBoardId('1');
    expect(result).toHaveLength(2);
    expect(mockTaskListRepository.find).toHaveBeenCalledWith({
      where: { board_id: '1' },
      order: { num: 'ASC' },
    });
  });

  it('should create a new task list', async () => {
    const createTaskListDto = {
      task_list_name: 'New Task List',
      board_id: '1',
    };
    const result = await service.createList(createTaskListDto);
    expect(result).toEqual({
      task_list_id: expect.any(String),
      ...createTaskListDto,
    });
    expect(mockTaskListRepository.create).toHaveBeenCalledWith(
      createTaskListDto,
    );
    expect(mockTaskListRepository.save).toHaveBeenCalled();
  });

  it('should rename a list', async () => {
    const renameTaskListDto = {
      task_list_name: 'Renamed Task List',
    };
    const result = await service.renameList(renameTaskListDto, '1');
    expect(result).toEqual({
      task_list_id: '1',
      task_list_name: renameTaskListDto.task_list_name,
      board_id: '1',
    });
    expect(mockTaskListRepository.findOne).toHaveBeenCalledWith({
      where: { task_list_id: '1' },
    });
    expect(mockTaskListRepository.save).toHaveBeenCalled();
  });

  it('should delete a list', async () => {
    const result = await service.deleteList('1');
    expect(result).toEqual({
      task_list_id: '1',
      task_list_name: 'Task List',
      board_id: '1',
    });
    expect(mockTaskListRepository.findOne).toHaveBeenCalledWith({
      where: { task_list_id: '1' },
    });
    expect(mockTaskListRepository.remove).toHaveBeenCalled();
  });
});
