export interface AnswerItem {
  id: number;
  text: string;
  valid: boolean;
  isSelect?: boolean;
}

export interface QuestionItem {
  id: number;
  question: string;
  answers: AnswerItem[];
}
