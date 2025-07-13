export class CreateAnswerDto {
  readonly text: string;
  readonly isCorrect: boolean;
  readonly questionId: number;
}
