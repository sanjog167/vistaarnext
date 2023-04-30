"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Params } from "@/lib/queryParams";
import LiveSearch from "./LiveSearch";
import useComponentVisible from "@/lib/useComponentVisible";

function formSubmit(
  e: FormEvent<HTMLFormElement>,
  currentSearchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance
) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  const keyword = formObject["keyword"];
  const params = new Params(currentSearchParams);
  params.replace("keyword", keyword.toString());

  router.push(`/products/search?${params.urlSearchParams()}`);
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchInput, setSearchInput] = useState("");
  // const [isLiveVisible, setIsLiveVisible] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <>
      <div className="hidden max-w-2xl basis-4/5 items-center sm:flex">
        <form
          className="flex h-11 w-full grow items-center"
          onSubmit={(e) => formSubmit(e, searchParams, router)}
        >
          <input
            className={`h-full w-full ${
              searchInput != "" && isComponentVisible
                ? "rounded-t-lg"
                : "rounded-lg"
            } pl-6 pr-10 outline-none placeholder:text-sm`}
            type="text"
            autoComplete="off"
            name="keyword"
            placeholder="Search for products (e.g. mobile, jackets, shoes)"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setIsComponentVisible(true);
            }}
            onClick={() => {
              if (searchInput != "") setIsComponentVisible(true);
            }}
            required
          />
          <input type="submit" className="absolute hidden" />
          <FontAwesomeIcon
            color="gray"
            className="absolute right-3 h-4"
            icon={faMagnifyingGlass}
          />

          {searchInput != "" && isComponentVisible && (
            <div className="absolute w-full" ref={ref}>
              <LiveSearch
                keyword={searchInput}
                closeCallback={() => setIsComponentVisible(false)}
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
}
