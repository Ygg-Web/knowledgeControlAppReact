import { Question } from "src/question/entities/question.model";

export class CreateTaskDto {
  readonly name: string;
  readonly description: string;
  // readonly userId: number;
  readonly question: Question[];
}
