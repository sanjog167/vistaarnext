import LoginSideImage from "@/../public/images/login_side.svg";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

import { getCsrfToken } from "next-auth/react";
import Link from "next/link";
import Form from "./components/Form";

function Graphics() {
  return (
    <div className="basis-1/2">
      <div className="flex flex-col items-center gap-4 pl-0 lg:pl-28">
        <div className="text-center">
          <p className="text-3xl font-bold">Sign In to VistaarTrade</p>
          <p className="text-3xl font-bold">
            Get access to{" "}
            <span className="text-primary">
              <Typewriter
                words={["5000+ Products.", "100+ Sellers.", "Unlimited Leads."]}
              />
            </span>
          </p>
        </div>
        <Image
          className="w-[400px]"
          src={LoginSideImage}
          alt="Sign In to VistaarTrade"
        />
        <p>
          New member?{" "}
          <Link href="/register" className="link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default async function Login() {
  const callbackUrl = "/api/auth/callback/credentials";
  const csrfToken = await getCsrfToken();

  return (
    <main className="my-6 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
      <Graphics />
      <Form {...{ csrfToken, callbackUrl }} />
    </main>
  );
}
