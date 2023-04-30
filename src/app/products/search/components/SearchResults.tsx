import SearchProduct from "./SearchProduct";

function Heading(props: { keyword: string | undefined; categories: any[] }) {
  if (!props.keyword && props.categories.length == 0) {
    return (
      <p className="mb-4 text-3xl">
        Browsing <span className="font-bold">all products</span>
      </p>
    );
  }

  if (props.keyword) {
    return (
      <p className="mb-4 text-3xl font-bold">
        Searching for &quot;{props.keyword}&quot;
      </p>
    );
  }

  return (
    <p className="mb-4 text-3xl">
      Browsing{" "}
      <span className="font-bold">
        {props.categories.map((categ) => categ.title).join(", ")}
      </span>
    </p>
  );
}

function Results(props: { products: any[] }) {
  if (props.products.length == 0) {
    return <p>No products match your query.</p>;
  }

  return (
    <>
      {props.products.map((product: any) => (
        <SearchProduct key={product.id} product={product} />
      ))}
    </>
  );
}

export default function SearchResults(props: {
  searchKeyword: string | undefined;
  searchCategories: any[];
  products: any;
}) {
  const products = props.products as any[];

  return (
    <div className="basis-[75%] bg-white px-4 py-8">
      <Heading
        keyword={props.searchKeyword}
        categories={props.searchCategories}
      />
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4">
          <Results products={products} />
        </div>
      </div>
    </div>
  );
}
