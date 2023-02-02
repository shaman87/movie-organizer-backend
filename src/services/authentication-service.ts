import bcript from "bcrypt";
import { User } from "@prisma/client";
import { SignUpParams } from "../protocols";
import { duplicatedEmailError } from "./errors";
import authenticationRepository from "../repositories/authentication-repository";

async function signUp(params: SignUpParams): Promise<User> {
  const { userName, email, password } = params;

  await validateUniqueEmail(email);

  const hashedPassword = await bcript.hash(password, 12);
  return authenticationRepository.createUser({
    userName,
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmail(email: string) {
  const userWithSameEmail = await authenticationRepository.findUserByEmail(email);
  if (userWithSameEmail) throw duplicatedEmailError();
}

const authenticationService = { signUp };

export default authenticationService;
