"use client";
// import { AddUserDocument } from "@/graphql/dist/generated-client";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  // const [addUser, { loading, error, data }] = useLazyQuery(AddUserDocument);
  return (
    <>
      <div className={`flex justify-start`}>
        <Link className={`border bg-slate-400 p-3`} href={"/"}>
          一覧へ戻る
        </Link>
      </div>
      <h1>Create User</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        className={`mt-10 border bg-red-400 p-3`}
        // onClick={() => addUser({ variables: { param: { name: "" } } })}
      >
        Create
      </button>
    </>
  );
}

export default function App() {
  return <CreateUser />;
}
