import Image from "next/image";
import VistaarTradeLogo from "@/../public/images/vistaar_trade.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import SearchBar from "./subcomponents/SearchBar";

function Logo() {
  return (
    <Link href="/">
      <Image src={VistaarTradeLogo} alt="Vistaar Trade" />
    </Link>
  );
}

function Actions() {
  return (
    <div className="flex gap-10">
      <FontAwesomeIcon
        color="white"
        className="h-6 cursor-pointer"
        icon={faBell}
      />
      <FontAwesomeIcon
        color="white"
        className="h-6 cursor-pointer"
        icon={faUser}
      />
    </div>
  );
}

export default function Main() {
  return (
    <div className="flex items-center justify-between gap-16 bg-primary px-2 py-2 lg:px-12">
      <div className="flex flex-grow basis-3/5 items-center gap-8">
        <Logo />
        <SearchBar />
      </div>
      <Actions />
    </div>
  );
}
