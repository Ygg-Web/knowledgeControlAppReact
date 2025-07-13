import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Answer } from 'src/question/entities/answer.model';
import { Task } from 'src/tasks/entities/task.model';

interface QuestionCreationAttrs {
  question: string;
}

@Table({ tableName: 'tasks' })
export class Question extends Model<Question, QuestionCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Indentificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Имя задания', description: 'Name task' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  question: string;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER })
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;

  @HasMany(() => Answer)
  answers: Answer[];
}
