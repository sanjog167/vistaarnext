import { Params } from "@/lib/queryParams";
import SearchFilter from "./components/SearchFilter";
import SearchResults from "./components/SearchResults";

async function searchProducts(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const params = new Params();
  params.addMany(searchParams);

  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/products/search/?${params.queryURL()}`
  );
  const json = await res.json();

  return json;
}

async function fetchCategories() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/products/category/all"
  );
  const json = await res.json();

  return json;
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchKeyword = searchParams["keyword"]?.toString();
  const searchCategories = searchParams["category"];

  // Set default page number.
  if (!searchParams["page"]) {
    searchParams["page"] = "1";
  }

  const products = await searchProducts(searchParams);
  const categories = await fetchCategories();

  let searchCategoriesArr: any[] = [];
  if (searchCategories) {
    searchCategoriesArr = (categories.categories as any[]).filter((categ) =>
      searchCategories.includes(categ.slug)
    );
  }

  return (
    <div className="flex items-start gap-4 bg-[#EFF7FA] px-3 py-12">
      <SearchFilter categories={categories.categories} />
      <SearchResults
        searchKeyword={searchKeyword}
        searchCategories={searchCategoriesArr}
        products={products.pag}
      />
    </div>
  );
}
