"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Link from "next/link";
import { useListMemosQuery } from "../graphql/dist/request";

function UsersAndTeams() {
  const { loading, error, data } = useListMemosQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  const { memos } = data;

  return (
    <>
      <div className={`flex justify-end`}>
        <Link className={`border bg-slate-500 p-3 text-white`} href={"/create"}>
          新規登録
        </Link>
      </div>
      <h1 className={`text-xl font-bold underline`}>User List</h1>
      <ul className={`mt-4`}>
        {memos?.map((memo) => {
          return (
            <li key={memo?.id} className={`mt-4 flex items-center first:mt-0`}>
              <p>
                {memo?.user.name} : {memo?.content}
              </p>
              <Link
                className={`ml-6 rounded border bg-teal-700 p-2 text-sm text-white`}
                href={`/show/${memo?.id}`}
              >
                詳細
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default function App() {
  return <UsersAndTeams />;
}
