import AuthEnpoint from "../endpoints/AuthEnpoint";
import { Auth } from "../interfaces/auth";

export default class AuthRepository {
  api: AuthEnpoint;

  constructor(api: AuthEnpoint) {
    this.api = api;
  }

  async login(payload: Auth) {
    return this.api.login(payload);
  }

  async signUp(payload: Auth) {
    return this.api.signUp(payload);
  }
}
