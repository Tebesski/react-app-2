import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Board {
  @PrimaryGeneratedColumn('uuid')
  board_id: string;

  @Column()
  board_name: string;
}
