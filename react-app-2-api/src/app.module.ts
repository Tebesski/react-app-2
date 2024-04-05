import { Module } from '@nestjs/common';
import { LogModule } from './log/log.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { TaskListModule } from './task_list/task_list.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import LogTaskListSubscriber from './log/log-task-list.subscriber';
import { LogTaskSubscriber } from './log/log-task.subscriber';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.NODE_ENV}`],
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: configService.get('SYNCHRONIZE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          subscribers: [LogTaskListSubscriber, LogTaskSubscriber],
          entities: [LogModule],
        };
      },
    }),
    LogModule,
    BoardModule,
    TaskModule,
    TaskListModule,
  ],
})
export class AppModule {}
