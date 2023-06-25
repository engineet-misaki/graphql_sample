"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { GetUsersAndTeamsDocument } from "../graphql/dist/generated-client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function UsersAndTeams() {
  const { loading, error, data } = useQuery(GetUsersAndTeamsDocument);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  const { teams } = data;

  return (
    <>
      <h1>List</h1>
      <ul>
        {teams.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <h1>User List</h1>
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
