import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './entities/task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async getAll() {
    return await this.taskRepository.findAll({ include: { all: true } });
  }

  async getTaskById(id: number) {
    return await this.taskRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async create(dto: CreateTaskDto) {
    return await this.taskRepository.create({ ...dto, image: ''});
  }

  async edit(id: number, dto: CreateTaskDto) {
    return await this.taskRepository.update(dto, { where: { id } });
  }

  async delete(id: number) {
    return await this.taskRepository.destroy({ where: { id } });
  }
}
