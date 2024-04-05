import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import CreateBoardDto from './dto/create-board.dto';
import RenameBoardDto from './dto/rename-board.dto';
import Board from './board.entity';

/* ====================================================================== */

@Injectable()
export class BoardService {
  private logger = new Logger('BoardService');

  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  /* GET ALL BOARD */
  public async getBoards(): Promise<Board[]> {
    try {
      const boards = await this.boardRepository.find();
      return boards;
    } catch (error) {
      this.logger.error('Failed to fetch all boards', error.stack);
      throw new InternalServerErrorException();
    }
  }
  /* GET BOARD BY ID */
  public async getBoardById(id: string): Promise<Board> {
    try {
      const board = await this.boardRepository.findOne({
        where: { board_id: id },
      });

      return board;
    } catch (error) {
      this.logger.error(`Failed to fetch board with ID: ${id}`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  /* CREATE A NEW BOARD */
  public async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { board_name } = createBoardDto;

    try {
      const newBoard = this.boardRepository.create({ board_name });
      await this.boardRepository.save(newBoard);
      return newBoard;
    } catch (error) {
      this.logger.error(`Failed to create board: ${board_name}`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  /* RENAME BOARD */
  public async renameBoard(
    renameBoardDto: RenameBoardDto,
    id: string,
  ): Promise<Board> {
    const { board_name } = renameBoardDto;
    try {
      const board = await this.getBoardById(id);
      if (!board) {
        throw new NotFoundException(`Board with ID: ${id} not found`);
      }
      board.board_name = board_name;
      await this.boardRepository.save(board);
      return board;
    } catch (error) {
      this.logger.error(`Failed to rename board with ID: ${id}`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  /* DELETE BOARD */
  public async deleteBoard(id: string): Promise<Board> {
    try {
      const board = await this.getBoardById(id);
      if (!board) {
        throw new NotFoundException(`Board with ID: ${id} not found`);
      }
      await this.boardRepository.remove(board);
      return board;
    } catch (error) {
      this.logger.error(`Failed to delete board with ID: ${id}`, error.stack);
      throw new InternalServerErrorException();
    }
  }
}
