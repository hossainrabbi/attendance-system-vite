export type UserRole = "super_admin" | "admin" | "user";

export type CommonResponse<T> = {
  data: T;
  error: string | null;
  message: string;
  status: boolean;
};
