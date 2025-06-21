import { QuestionItem } from "./questions";

export interface Author {
  name: string;
  avatar: string;
}

export interface TaskItem {
  id: number;
  date: number;
  author: Author;
  img: string;
  name: string;
  description: string;
  countQuestions: number;
}

export interface TaskItemById extends TaskItem {
  questions: QuestionItem[];
}

export type TaskCreate = Pick<
  TaskItem,
  "author" | "img" | "name" | "description"
>;

export type TaskEdit = Pick<TaskItem, "img" | "name" | "description">;
