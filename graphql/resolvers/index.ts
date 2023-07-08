import { Resolvers } from "@/graphql/dist/generated/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    listTodos: async (_parent, _args, { prisma }) => {
      return await prisma.todo.findMany();
    },
  },
  Mutation: {
    addTodo: async (_parent, { content }, { prisma }) => {
      return await prisma.todo.create({
        data: { content, createdAt: new Date().toISOString() },
      });
    },
    updateTodo: async (_parent, { id, done }, { prisma }) => {
      return await prisma.todo.update({
        where: { id },
        data: { done },
      });
    },
    deleteTodo: async (_parent, { id }, { prisma }) => {
      return await prisma.todo.delete({
        where: { id },
      });
    },
  },
};
