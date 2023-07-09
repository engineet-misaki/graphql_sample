import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "@/graphql/resolvers";
import { createContext, Context } from "@/graphql/context";

const path = join(process.cwd(), "graphql", "dist", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest, Context>(
  apolloServer,
  {
    context: async (req) => ({
      prisma: createContext().prisma,
    }),
  }
);

export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}
