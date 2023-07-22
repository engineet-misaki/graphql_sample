"use client";
import { useSignupMutation } from "@/graphql/dist/request";
import * as React from "react";

export default function Signin() {
  const [signup] = useSignupMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email") && data.get("password")) {
      signup({
        variables: {
          email: String(data.get("email")),
          password: String(data.get("password")),
        },
      });
    }
  };

  return (
    <div>
      <div>
        <p>ログイン</p>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <div className="flex gap-3">
              <p>email</p>
              <input id="email" name="email" />
            </div>
            <div className="flex gap-3 mt-4">
              <p>password</p>
              <input name="password" type="password" id="password" />
            </div>
          </div>
          <button className={`mt-8 border bg-red-400 p-3`} type="submit">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
