"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import * as Documents from "../graphql/dist/request";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function UsersAndTeams() {
  // const { loading, error, data } = useQuery(Documents.ListMemosDocument);
  const { loading, error, data } = Documents.useListMemosQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  const { memos } = data;

  return (
    <>
      <h1>List</h1>
      <ul>
        {memos?.map((memo) => {
          return <li key={memo?.id}>{memo?.content}</li>;
        })}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <UsersAndTeams />
    </ApolloProvider>
  );
}
