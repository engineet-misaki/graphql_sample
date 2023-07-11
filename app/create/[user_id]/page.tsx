"use client";
import { useAddMemoMutation, useAddUserMutation } from "@/graphql/dist/request";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Props = { params: { user_id: string } };

function CreateUser({ params: { user_id } }: Props) {
  // const { loading, error, data } = use();
  const [AddMemoMutation] = useAddMemoMutation();
  const [content, setContent] = useState("");
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    await AddMemoMutation({
      variables: {
        content: content,
        userId: user_id,
      },
    });

    setContent("");
  };
  return (
    <>
      <form className="flex p-10" onSubmit={submitHandler}>
        <div className={`flex justify-start`}>
          <h1>Create userId</h1>
          <Link className={`border bg-slate-400 p-3`} href={"/"}>
            一覧へ戻る
          </Link>
        </div>
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={`mt-10 border bg-red-400 p-3`}>Create</button>
      </form>
    </>
  );
}

export default CreateUser;
