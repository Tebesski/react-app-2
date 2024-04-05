import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TaskList {
  @Column()
  @Generated('increment')
  num: number;

  @Column()
  board_id: string;

  @PrimaryGeneratedColumn('uuid')
  task_list_id: string;

  @Column({ nullable: true })
  task_list_name: string;
}
