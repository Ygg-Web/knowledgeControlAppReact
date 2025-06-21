import { AxiosInstance } from "axios";
import { Auth } from "../interfaces/auth";

export default class AuthEnpoint {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async login(payload: Auth): Promise<void> {
    return this.api.post("auth/login", payload);
  }

  async signUp(payload: Auth): Promise<void> {
    return this.api.post("auth/sign-up/", payload);
  }
}
