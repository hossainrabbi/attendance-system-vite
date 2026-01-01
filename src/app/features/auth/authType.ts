import type { UserRole } from "@/types";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  access_token_expires_at: number;
  refresh_token: string;
  refresh_token_expires_at: number;
  token_type: string;
  role: UserRole;
}
