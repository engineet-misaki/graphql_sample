import Link from "next/link";

function CreateUser() {
  return (
    <>
      <div className={`flex justify-start`}>
        <Link className={`p-3 border bg-slate-400`} href={"/"}>
          一覧へ戻る
        </Link>
      </div>
      <h1>Create User</h1>
    </>
  );
}

export default function App() {
  return <CreateUser />;
}
