import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "fs";
import { join } from "path";

import { Resolvers } from "../../../graphql/dist/generated-server";

import { NextResponse } from "next/server";

const path = join(process.cwd(), "graphql", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

// スキーマと実際のデータ構造の紐付けを resolvers で行う
type Team = "Red" | "White";

const teams: { id: string; name: Team }[] = [
  { id: "1", name: "Red" },
  { id: "2", name: "White" },
];

type User = { id: string; name: string; teamName: Team };

const users: User[] = [
  { id: "1", name: "Alice", teamName: "Red" },
  { id: "2", name: "Bob", teamName: "Red" },
  { id: "3", name: "Carol", teamName: "White" },
];
const user: User = { id: "3", name: "Carol", teamName: "White" };

const resolvers: Resolvers = {
  Query: {
    users: () => users,
    teams: () => teams,
    user: () => user,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}
