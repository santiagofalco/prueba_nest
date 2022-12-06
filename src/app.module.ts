import { Module } from '@nestjs/common';
import { TodoController } from './todos/todos.controller';

@Module({
  imports: [],
  controllers: [TodoController],
})
export class AppModule {}
