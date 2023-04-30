"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { signIn, signOut } from "next-auth/react";

function LoginBtn() {
  return (
    <button
      className="flex items-center gap-2 px-4 first:pl-0 last:pr-0 hover:text-gray-900"
      onClick={() => signIn()}
    >
      <FontAwesomeIcon className="h-3" icon={faUser} />
      Login
    </button>
  );
}

function LogoutBtn(name: string) {
  return (
    <button
      className="flex items-center gap-2 px-4 first:pl-0 last:pr-0 hover:text-gray-900"
      onClick={() => signOut()}
    >
      <FontAwesomeIcon className="h-3" icon={faUser} />
      Logout ({name})
    </button>
  );
}

export default function TopAccount(props: { name: string | null | undefined }) {
  return props.name ? LogoutBtn(props.name) : LoginBtn();
}
