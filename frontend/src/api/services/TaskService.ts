import {
  TaskCreate,
  TaskEdit,
  TaskItem,
  TaskItemById,
} from "../interfaces/tasks";
import TaskRepository from "../repositories/TaskRepository";

export class TaskService {
  constructor(private repository: TaskRepository) {}

  async getAll(): Promise<TaskItem[]> {
    try {
      const tasks = await this.repository.getAll();
      return tasks;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getById(id: number): Promise<TaskItemById | null> {
    try {
      const task = await this.repository.getById(id);
      return task;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async create(payload: TaskCreate): Promise<TaskItem | null> {
    try {
      const task = await this.repository.create(payload);
      return task;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async update(id: number, payload: TaskEdit): Promise<void> {
    try {
      await this.repository.update(id, payload);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      console.error(error);
    }
  }
}
