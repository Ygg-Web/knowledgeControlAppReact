import { BaseRepository } from "../core/BaseRepository";
import TaskEnpoint from "../endpoints/TaskEnpoint";
import {
  TaskCreate,
  TaskEdit,
  TaskItem,
  TaskItemById,
} from "../interfaces/tasks";

export default class TaskRepository extends BaseRepository<any> {
  api: TaskEnpoint;
  constructor(api: TaskEnpoint) {
    super();
    this.api = api;
  }

  async getAll(): Promise<TaskItem[]> {
    return this.api.getAll<TaskItem[]>();
  }

  async getById(id: number): Promise<TaskItemById> {
    return this.api.getById<TaskItemById>(id);
  }

  async create(payload: TaskCreate): Promise<TaskItem> {
    return this.api.create<TaskItem>(payload);
  }

  async update(id: number, payload: TaskEdit): Promise<void> {
    return this.api.update<void>(id, payload);
  }

  async delete(id: number): Promise<void> {
    return this.api.delete<void>(id);
  }
}
