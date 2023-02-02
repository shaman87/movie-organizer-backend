import { User } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignUpParams = Pick<User, "userName" | "email" | "password">;
