import { BaseRepository } from "../core/BaseRepository";
import QuestionEnpoint from "../endpoints/QuestionEnpoint";
import { QuestionItem } from "../interfaces/questions";

export default class QuestionRepository extends BaseRepository<any> {
  api: QuestionEnpoint;

  constructor(api: QuestionEnpoint) {
    super();
    this.api = api;
  }

  async getAll(taskId: number): Promise<QuestionItem[]> {
    return this.api.getAll<QuestionItem[]>(taskId);
  }

  // Возможно не нужен
  async getById(id: number): Promise<QuestionItem> {
    return this.api.getById<QuestionItem>(id);
  }

  async create(payload: QuestionItem[]): Promise<QuestionItem> {
    return this.api.create<QuestionItem>(payload);
  }

  async update(id: number, payload: QuestionItem): Promise<void> {
    return this.api.update<void>(id, payload);
  }

  async delete(id: number): Promise<void> {
    return this.api.delete<void>(id);
  }
}
