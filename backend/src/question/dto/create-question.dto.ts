import { Answer } from "../entities/answer.model";

export class CreateQuestionDto {
  readonly taskId: number; 
  readonly question: string;
  readonly answers: Answer[];
}
