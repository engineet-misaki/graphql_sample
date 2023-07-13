"use client";
import { useAddMemoMutation, useShowUserQuery } from "@/graphql/dist/request";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

type Props = { params: { user_id: string } };

function CreateUser({ params: { user_id } }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [AddMemoMutation] = useAddMemoMutation();
  const { loading, error, data, refetch } = useShowUserQuery({
    variables: { userId: user_id },
  });

  const [content, setContent] = useState("");
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!data?.user?.id) return;

    await AddMemoMutation({
      variables: {
        content: content,
        userId: data?.user?.id,
      },
    });

    router.push("/");
    // startTransition(() => {
    //   router.refresh();
    // });
  };
  return (
    <>
      <form className="p-10" onSubmit={submitHandler}>
        <div className={`flex justify-between items-center`}>
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
