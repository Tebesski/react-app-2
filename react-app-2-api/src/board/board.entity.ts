import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Board {
  @PrimaryGeneratedColumn('uuid')
  board_id: string;

  @Column()
  board_name: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP::timestamp(0)',
  })
  board_creation_time: string;
}
