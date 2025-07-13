import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Тесты')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  create(@Body() taskDto: CreateTaskDto) {
    return this.tasksService.create(taskDto);
  }

  @Put('/:id')
  edit(@Body() taskDto: CreateTaskDto, @Param('id') id: number) {
    return this.tasksService.edit(id, taskDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
