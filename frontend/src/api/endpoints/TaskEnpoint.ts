import { AxiosInstance } from "axios";
import {
  TaskCreate,
  TaskEdit,
} from "../interfaces/tasks";

export default class TaskEnpoint {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async getAll<T>(): Promise<T> {
    return this.api.get("tasks");
  }

  async getById<T>(id: number): Promise<T> {
    return this.api.get(`tasks/${id}`);
  }

  async create<T>(payload: TaskCreate): Promise<T> {
    return this.api.post("tasks", payload);
  }

  async update<T>(id: number, payload: TaskEdit): Promise<T> {
    return this.api.put(`tasks/${id}`, payload);
  }

  async delete<T>(id: number): Promise<T> {
    return this.api.delete(`tasks/${id}`);
  }
}
