import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type Context = {
  prisma: typeof prisma;
};

export const createContext = () => {
  return {
    prisma: prisma,
  };
};
