import { Prisma } from "@prisma/client";
import { prisma } from "../config/database";

async function createUser(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function findUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
}

const authenticationRepository = { createUser, findUserByEmail };

export default authenticationRepository;
