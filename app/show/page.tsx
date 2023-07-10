"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Link from "next/link";
import { GetUserDocument } from "../../graphql/dist/generated-client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function ShowUser() {
  const { loading, error, data } = useQuery(GetUserDocument, {
    variables: { id: "1" },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  const { user } = data;
  return (
    <>
      <div className={`flex justify-start`}>
        <Link className={`border bg-slate-400 p-3`} href={"/"}>
          一覧へ戻る
        </Link>
      </div>
      <h1>Show User</h1>

      <div className={`mt-4`}>
        {user ? (
          <p>
            {user.id} {user.name}
          </p>
        ) : (
          <p>ユーザーは存在しません。</p>
        )}
      </div>
    </>
  );
}

export default function App() {
  return <ShowUser />;
}
