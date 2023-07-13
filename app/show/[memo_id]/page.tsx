"use client";

import {
  useAddMemoMutation,
  useShowMemoQuery,
  useShowUserQuery,
  useUpdateMemoMutation,
} from "@/graphql/dist/request";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

type Props = { params: { memo_id: string } };

export default function ShowUser({ params: { memo_id } }: Props) {
  const router = useRouter();

  const [updateMemo] = useUpdateMemoMutation();
  const { loading, error, data } = useShowMemoQuery({
    variables: { memoId: memo_id },
  });

  const [content, setContent] = useState("");
  useEffect(() => {
    if (!data?.memo?.content) return;
    setContent(data?.memo?.content ?? []);
  }, [data?.memo?.content]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!data?.memo?.id) return;

    await updateMemo({
      variables: {
        content: content,
        id: data.memo.id,
      },
    });
    router.push("/");
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!data?.memo) return <div>data error...</div>;

  return (
    <>
      <form className="p-10" onSubmit={submitHandler}>
        <div className={`flex justify-start`}>
          <Link className={`border bg-slate-400 p-3`} href={"/"}>
            一覧へ戻る
          </Link>
        </div>
        <h1>Show memo</h1>

        <div className={`mt-4`}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={`mt-10 border bg-red-400 p-3`}>Update</button>
      </form>
    </>
  );
}
