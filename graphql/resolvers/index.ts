import { Resolvers } from "@/graphql/dist/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    memos: async (_parent, _args, { prisma }) => {
      return await prisma.memo.findMany();
    },
    users: async (_parent, _args, { prisma }) => {
      return await prisma.user.findMany();
    },
    memo: async (_parent, _args, { prisma }) => {
      return await prisma.memo.findUniqueOrThrow({
        where: { id: _args.memoId },
      });
    },
    user: async (_parent, { userId }, { prisma }) => {
      return await prisma.user.findUniqueOrThrow({
        where: { id: userId },
      });
    },
  },
  Memo: {
    user: async (_parent, _args, { prisma }) => {
      return await prisma.user.findUniqueOrThrow({
        where: { id: _parent.userId },
      });
    },
    like: async (_parent, _args, { prisma }) => {
      return await prisma.like.findMany({ where: { memoId: _parent.id } });
    },
    likeNum: async (_parent, _args, { prisma }) => {
      return await prisma.like.count();
    },
  },
  User: {
    memos: async (_parent, _args, { prisma }) => {
      return await prisma.memo.findMany();
    },
  },
  Mutation: {
    addMemo: async (_parent, { content, userId }, { prisma }) => {
      return await prisma.memo.create({
        data: { content, userId, createdAt: new Date().toISOString() },
      });
    },
    updateMemo: async (_parent, { id, content }, { prisma }) => {
      return await prisma.memo.update({
        where: { id },
        data: { content },
      });
    },
    likeMemo: async (_parent, { id, userId }, { prisma }) => {
      return await prisma.like.create({
        data: { userId, memoId: id, createdAt: new Date().toISOString() },
      });
    },
    likeMemoDelete: async (_parent, { id }, { prisma }) => {
      return await prisma.like.delete({
        where: { id },
      });
    },
    deleteMemo: async (_parent, { id }, { prisma }) => {
      return await prisma.memo.delete({
        where: { id },
      });
    },
    signup: async (_parent, { email, password, name }, { prisma }) => {
      return await prisma.user.create({
        data: { email, password, name, createdAt: new Date().toISOString() },
      });
    },
    signin: async (_parent, { email, password }, { prisma }) => {
      return await prisma.user.findFirstOrThrow();
    },
  },
};
