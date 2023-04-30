"use client";

import Link from "next/link";
import { useState } from "react";

export default function Form(props: {
  csrfToken: string | undefined;
  callbackUrl: string;
}) {
  const [toShowPassword, setToShowPassword] = useState(false);

  return (
    <form
      action={props.callbackUrl}
      method="POST"
      className="mr-4 flex basis-1/2 flex-col pl-0 lg:pl-28"
    >
      <input type="hidden" name="csrfToken" value={props.csrfToken} />

      <div className="flex w-max flex-col gap-6 rounded-lg p-5 shadow-2xl">
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-bold">Login</p>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            placeholder="Enter Username"
            className="border-2 border-solid border-gray-200 px-6 py-3 outline-none"
          />
          <p className="text-xs text-gray-500">
            We&apos;ll never share your email with anyone else.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            type={toShowPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            className="border-2 border-solid border-gray-200 px-6 py-3 outline-none"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="show_password"
              onClick={() => setToShowPassword((cur) => !cur)}
            />
            <label htmlFor="show_password">Show Password</label>
          </div>
        </div>
        <div className="self-end">
          <Link className="link" href="#">
            Forgot Password
          </Link>
        </div>
        <button className="btn -mt-2">Submit</button>
      </div>
    </form>
  );
}
