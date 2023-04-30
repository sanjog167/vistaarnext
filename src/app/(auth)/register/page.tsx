import LoginSideImage from "@/../public/images/login_side.svg";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

import Link from "next/link";
import Form from "../register/components/Form";

function Graphics() {
  return (
    <div className="basis-1/2">
      <div className="flex flex-col items-center gap-4 pl-0 lg:pl-28">
        <div className="text-center">
          <p className="text-3xl font-bold">Register with VistaarTrade</p>
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
          alt="Register with VistaarTrade"
        />
        <p>
          Already a member?{" "}
          <Link href="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default async function Register() {
  return (
    <main className="my-6 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
      <Graphics />
      <Form />
    </main>
  );
}
