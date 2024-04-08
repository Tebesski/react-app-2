import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

describe('BoardController', () => {
  let controller: BoardController;

  const mockBoardService = {
    createBoard: jest.fn((createBoardDto) => {
      return {
        board_creation_time: Date.now().toString(),
        board_id: Date.now().toString(),
        ...createBoardDto,
      };
    }),
    getBoards: jest.fn(() => {
      return [
        {
          board_creation_time: Date.now().toString(),
          board_id: Date.now().toString(),
          board_name: 'Board',
        },
      ];
    }),
    getBoardById: jest.fn((id) => {
      return {
        board_creation_time: Date.now().toString(),
        board_id: id,
        board_name: 'Board',
      };
    }),
    renameBoard: jest.fn((renameBoardDto, id) => {
      return {
        board_creation_time: Date.now().toString(),
        board_id: id,
        ...renameBoardDto,
      };
    }),
    deleteBoard: jest.fn((id) => {
      return {
        board_creation_time: Date.now().toString(),
        board_id: id,
        board_name: 'Board',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [BoardService],
    })
      .overrideProvider(BoardService)
      .useValue(mockBoardService)
      .compile();

    controller = module.get<BoardController>(BoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a board', async () => {
    const result = await controller.createBoard({ board_name: 'Board' });
    expect(result).toEqual({
      board_creation_time: expect.any(String),
      board_id: expect.any(String),
      board_name: expect.any(String),
    });
  });

  it('should get all boards', async () => {
    const result = await controller.getBoards();
    expect(result).toEqual([
      {
        board_creation_time: expect.any(String),
        board_id: expect.any(String),
        board_name: expect.any(String),
      },
    ]);
  });

  it('should get board by id', async () => {
    const result = await controller.getBoardById('1');
    expect(result).toEqual({
      board_creation_time: expect.any(String),
      board_id: '1',
      board_name: expect.any(String),
    });
  });

  it('should rename board', async () => {
    const result = await controller.renameBoard(
      { board_name: 'New Board' },
      '1',
    );
    expect(result).toEqual({
      board_creation_time: expect.any(String),
      board_id: '1',
      board_name: 'New Board',
    });
  });

  it('should delete board', async () => {
    const result = await controller.deleteBoard('1');
    expect(result).toEqual({
      board_creation_time: expect.any(String),
      board_id: '1',
      board_name: expect.any(String),
    });
  });
});
