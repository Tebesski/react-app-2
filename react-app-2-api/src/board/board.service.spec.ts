import { Test, TestingModule } from '@nestjs/testing';
import { BoardService } from './board.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import Board from './board.entity';

describe('BoardService', () => {
  let service: BoardService;

  const mockBoardRepository = {
    create: jest.fn((dto) => ({
      board_id: Date.now().toString(),
      board_creation_time: Date.now().toString(),
      ...dto,
    })),
    save: jest.fn((board) =>
      Promise.resolve({
        board_id: Date.now().toString(),
        board_creation_time: Date.now().toString(),
        ...board,
      }),
    ),

    find: jest.fn(() => [
      {
        board_id: Date.now().toString(),
        board_creation_time: Date.now().toString(),
        board_name: 'Board',
      },
    ]),

    findOne: jest.fn(() => ({
      board_id: '1',
      board_creation_time: Date.now().toString(),
      board_name: 'Board',
    })),

    update: jest.fn((board) =>
      Promise.resolve({
        board_id: '1',
        board_creation_time: Date.now().toString(),
        ...board,
      }),
    ),

    remove: jest.fn((board) => Promise.resolve()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: getRepositoryToken(Board),
          useValue: mockBoardRepository,
        },
      ],
    }).compile();

    service = module.get<BoardService>(BoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a board and return it', async () => {
    expect(await service.createBoard({ board_name: 'Board' })).toEqual({
      board_id: expect.any(String),
      board_creation_time: expect.any(String),
      board_name: 'Board',
    });
  });

  it('should return all boards', async () => {
    expect(await service.getBoards()).toEqual([
      {
        board_id: expect.any(String),
        board_creation_time: expect.any(String),
        board_name: 'Board',
      },
    ]);
  });

  it('should return a board by id', async () => {
    expect(await service.getBoardById('1')).toEqual({
      board_id: '1',
      board_creation_time: expect.any(String),
      board_name: 'Board',
    });
  });

  it('should rename a board and return it', async () => {
    expect(await service.renameBoard({ board_name: 'Board' }, '1')).toEqual({
      board_id: '1',
      board_creation_time: expect.any(String),
      board_name: 'Board',
    });
  });

  it('should delete a board and return affected', async () => {
    expect(await service.deleteBoard('1')).toEqual({
      board_id: '1',
      board_creation_time: expect.any(String),
      board_name: expect.any(String),
    });
  });
});
