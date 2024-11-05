import { z } from 'zod';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export class RegisterDto {
  fullName: string;
  username: string;
  role: Role;
  email: string;
  password: string;
}

export class LoginDto {
  username: string;
  password: string;
}

const RoleEnum = z.enum([Role.USER, Role.ADMIN]);

export const registerSchema = z.object({
  fullName: z.string().min(1, 'Name cannot be empty'),
  email: z.string().email({ message: 'Invalid email' }),
  username: z
    .string()
    .min(1, 'Username cannot be empty')
    .max(20, 'Username cannot be longer than 20 characters'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot be longer than 30 characters'),
  role: RoleEnum.default(Role.USER).optional(),
});

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'Username cannot be empty')
    .max(20, 'Username cannot be longer than 20 characters'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot be longer than 30 characters'),
});
