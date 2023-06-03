export interface User {
  id: number;
  email: string;
  name: string;
  googleId?: string;
  bio: string;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  token: string;
}
export interface UserActivity {
  status: string;
  user: User;
}
export interface CreateUser {
  email: string;
  password: string;
  name: string;
  bio: string;
}
export interface LogingUser {
  email: string;
  password: string;
}
export interface ModifyUser {
  name: string;
  password: string;
  oldPassword: string;
  bio?: string;
}
