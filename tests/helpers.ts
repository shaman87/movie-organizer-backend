import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.genre.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.listAndMovie.deleteMany({});
  await prisma.movieList.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.user.deleteMany({});
}
