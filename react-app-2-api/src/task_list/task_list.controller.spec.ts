import { Test, TestingModule } from '@nestjs/testing';
import { TaskListController } from './task_list.controller';
import { TaskListService } from './task_list.service';

describe('TaskListController', () => {
  let controller: TaskListController;

  const mockTaskListService = {
    getLists: jest.fn(() => {
      return [
        {
          task_list_id: Date.now().toString(),
          task_list_name: 'Task List',
          board_id: Date.now().toString(),
        },
      ];
    }),
    getTaskListById: jest.fn((id) => {
      return {
        task_list_id: id,
        task_list_name: 'Task List',
        board_id: Date.now().toString(),
      };
    }),
    getTaskListByBoardId: jest.fn((id) => {
      return [
        {
          task_list_id: Date.now().toString(),
          task_list_name: 'Task List',
          board_id: id,
        },
      ];
    }),
    createList: jest.fn((createTaskListDto) => {
      return {
        task_list_id: Date.now().toString(),
        ...createTaskListDto,
      };
    }),
    renameList: jest.fn((renameTaskListDto, id) => {
      return {
        task_list_id: id,
        ...renameTaskListDto,
      };
    }),
    deleteList: jest.fn((id) => {
      return {
        task_list_id: id,
        task_list_name: 'Task List',
        board_id: Date.now().toString(),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskListController],
      providers: [TaskListService],
    })
      .overrideProvider(TaskListService)
      .useValue(mockTaskListService)
      .compile();

    controller = module.get<TaskListController>(TaskListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get task list', async () => {
    expect(await controller.getTaskList()).toEqual([
      {
        task_list_id: expect.any(String),
        task_list_name: 'Task List',
        board_id: expect.any(String),
      },
    ]);
  });

  it('should get task list by id', async () => {
    const id = Date.now().toString();
    expect(await controller.getTaskListById(id)).toEqual({
      task_list_id: id,
      task_list_name: 'Task List',
      board_id: expect.any(String),
    });
  });

  it('should get task list by board id', async () => {
    const id = Date.now().toString();
    expect(await controller.getTaskListByBoardId(id)).toEqual([
      {
        task_list_id: expect.any(String),
        task_list_name: 'Task List',
        board_id: id,
      },
    ]);
  });

  it('should create task list', async () => {
    const board_id = Date.now().toString();
    expect(
      await controller.createTaskList({
        task_list_name: 'Task List',
        board_id,
      }),
    ).toEqual({
      task_list_id: expect.any(String),
      task_list_name: 'Task List',
      board_id,
    });
  });

  it('should rename task list', async () => {
    const id = Date.now().toString();
    expect(
      await controller.renameList({ task_list_name: 'New Task List' }, id),
    ).toEqual({
      task_list_id: id,
      task_list_name: 'New Task List',
    });
  });

  it('should delete task list', async () => {
    const id = Date.now().toString();
    expect(await controller.deleteTaskList(id)).toEqual({
      task_list_id: id,
      task_list_name: 'Task List',
      board_id: expect.any(String),
    });
  });
});
