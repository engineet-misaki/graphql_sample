"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Link from "next/link";
import { GetUsersAndTeamsDocument } from "../graphql/dist/generated-client";

function UsersAndTeams() {
  // const { loading, error, data } = useQuery(Documents.ListMemosDocument);
  const { loading, error, data } = Documents.useListMemosQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  const { users } = data;

  return (
    <>
      <div className={`flex justify-end`}>
        <Link className={`border bg-slate-500 p-3 text-white`} href={"/create"}>
          新規登録
        </Link>
      </div>
      <h1 className={`text-xl font-bold underline`}>User List</h1>
      <ul className={`mt-4`}>
        {users.map(({ id, name }) => {
          return (
            <li key={id} className={`mt-4 flex items-center first:mt-0`}>
              <p>{name} :</p>
              <Link
                className={`ml-6 rounded border bg-teal-700 p-2 text-sm text-white`}
                href={"/show"}
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
