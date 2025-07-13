import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question) private questionRepository: typeof Question) {}

  async getAll() {
    return await this.questionRepository.findAll({ include: { all: true } });
  }

  async getTaskById(id: number) {
    return await this.questionRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async create(dto: CreateQuestionDto) {
    return await this.questionRepository.create(dto);
  }

  async edit(id: number, dto: CreateQuestionDto) {
    return await this.questionRepository.update(dto, { where: { id } });
  }

  async delete(id: number) {
    return await this.questionRepository.destroy({ where: { id } });
  }
}
