import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import TopAccount from "./subcomponents/TopAccount";

export default (async function Top() {
  const session = await getServerSession(authOptions);

  return (
    <div className="hidden items-center justify-between bg-secondary px-4 py-[3px] text-sm text-gray-500 md:flex lg:px-12">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon className="h-3" icon={faPhoneVolume} />
        <p>
          We are available 24/7, Need help? Call Us:{" "}
          <span className="font-semibold">9814179432</span>
        </p>
      </div>
      <div className="flex h-3 divide-x-2 divide-gray-400">
        <Link
          href="#"
          className="flex items-center px-4 first:pl-0 last:pr-0 hover:text-gray-900"
        >
          About Us
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 first:pl-0 last:pr-0 hover:text-gray-900"
        >
          Contact Us
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 first:pl-0 last:pr-0 hover:text-gray-900"
        >
          My Account
        </Link>
        <TopAccount name={(session?.user as any)?.first_name} />
      </div>
    </div>
  );
} as unknown as () => JSX.Element);
