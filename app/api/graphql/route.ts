import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "fs";
import { join } from "path";
import { gql } from "graphql-tag";

import { NextResponse } from "next/server";
import { QueryResolvers, Resolvers } from "@/graphql/dist/generated-server";

const path = join(process.cwd(), "graphql", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

const memos = [
  {
    id: "1",
    content: "content1",
    userId: "1",
    // likeNum: 1,
  },
  {
    id: "2",
    content: "content1",
    userId: "2",
    // likeNum: 2,
  },
];
const users = [
  {
    id: "1",
    name: "name1",
    grant: "RED",
  },
  {
    id: "2",
    name: "name2",
    grant: "GREEN",
  },
];

const resolvers: QueryResolvers = {
  Query: {
    memos: () => memos,
  },
  Memo: {
    user: (parent) => {
      return users.find((user) => user.id === parent.userId);
    },
  },
  // User: {
  //   memos(parent) {
  //     return memos.filter((memo) => memo.userId === parent.id);
  //   },
  // },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
