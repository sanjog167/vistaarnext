import Image from "next/image";
import { usePathname } from "next/navigation";

import { Params } from "@/lib/queryParams";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import spinner from "@/../public/images/spinner.gif";

function changeEventHandler(
  event: ChangeEvent<HTMLInputElement>,
  router: AppRouterInstance,
  pathname: string,
  urlSearchParams: ReadonlyURLSearchParams,
  loadingStateDispatch: Dispatch<SetStateAction<boolean>>
) {
  const category = event.target.value;
  const isChecked = event.target.checked;

  loadingStateDispatch(true);

  const searchParams = new Params(urlSearchParams);

  if (isChecked) {
    searchParams.add("category", category);
  } else {
    searchParams.remove("category", category);
  }

  router.push(`${pathname}?${searchParams.queryURL()}`);
}

export default function CategoryEntry(props: {
  category: any;
  allCategories: any[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const currentCategories = currentSearchParams.getAll("category");

  const [isLoading, setIsLoading] = useState(false);

  return (
    <label key={props.category.id} className="checkbox text-sm text-gray-500">
      {props.category.title}
      <input
        name="category"
        type="checkbox"
        value={props.category.slug}
        onChange={(e) =>
          changeEventHandler(
            e,
            router,
            pathname,
            currentSearchParams,
            setIsLoading
          )
        }
        checked={currentCategories.includes(props.category.slug)}
      />
      <span className="checkmark">
        <Image
          src={spinner}
          fill
          alt="Loading"
          className={isLoading ? "block" : "hidden"}
        />
      </span>
    </label>
  );
}
