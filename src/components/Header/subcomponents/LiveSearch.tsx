"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";
import spinner from "@/../public/images/spinner.gif";

export default function LiveSearch(props: {
  keyword: string;
  closeCallback: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [categs, setCategs] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);

    async function getCategs() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          `/api/products/livesearch/?keyword=${props.keyword}`
      );
      const json = await res.json();
      setCategs(json.categories);

      setIsLoading(false);
    }
    getCategs();
  }, [props.keyword]);

  return (
    <div className="absolute top-5 z-50 max-h-[500px] w-full max-w-2xl overflow-y-auto rounded-b-md border bg-white px-4 py-2">
      {isLoading ? (
        <Image src={spinner} alt="loading" className="mx-auto h-5 w-auto" />
      ) : (
        <>
          <p className="font-bold text-primary">Category</p>
          <hr className="my-2" />
          <div className="flex flex-col gap-1">
            {categs.map((categ) => (
              <Link
                onClick={() => props.closeCallback()}
                href={`/products/search/?keyword=${props.keyword}&category=${categ.slug}`}
                key={categ.slug}
              >
                {props.keyword} in{" "}
                <span className="font-bold">{categ.title}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
