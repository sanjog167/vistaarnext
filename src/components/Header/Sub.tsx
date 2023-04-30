import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sub() {
  return (
    <div className="hidden justify-between px-4 py-[6px] text-sm md:flex lg:px-12">
      <Left />
      <Right />
    </div>
  );
}

function Left() {
  return (
    <div className="flex items-center gap-5">
      <Link href="#" className="py-1 pr-2">
        Categories
        <FontAwesomeIcon
          className="ml-[5px] inline-block h-3 align-text-bottom"
          icon={faAngleDown}
        />
      </Link>
      <Link href="#" className="rounded-md px-2 py-1 hover:bg-gray-200">
        About Us
      </Link>
      <Link href="#" className="rounded-md px-2 py-1 hover:bg-gray-200">
        Contact Us
      </Link>
      <Link href="#" className="px-2 py-1">
        Pages
        <FontAwesomeIcon
          className="ml-[5px] inline-block h-3 align-text-bottom"
          icon={faAngleDown}
        />
      </Link>
      <Link
        className="relative rounded-md bg-[#E6F4F2] px-2 py-[2px] text-[#00907C] hover:bg-[#BFF2EB]"
        href="#"
      >
        Offers
        <div className="absolute right-[-1px] top-[-3px] rounded-full bg-[#00907C] p-1" />
      </Link>
    </div>
  );
}

function Right() {
  return (
    <div className="flex items-center gap-5">
      <Link
        href="#"
        className="rounded-md px-2 py-1 first:pl-0 last:pr-0 hover:bg-gray-200"
      >
        Privacy Policy
      </Link>
      <Link
        href="#"
        className="rounded-md px-2 py-1 first:pl-0 last:pr-0 hover:bg-gray-200"
      >
        Terms & Conditions
      </Link>
    </div>
  );
}
