import CategoriesList from "./subcomponents/CategoriesList";

export default function SearchFilter(props: { categories: any }) {
  const categories = props.categories as any[];

  return (
    <div className="basis-[25%] bg-white px-2 py-4">
      <p className="mb-4 w-max border border-x-0 border-b-2 border-t-0 border-gray-500 pb-2">
        Categories
      </p>
      <CategoriesList categories={categories} />
    </div>
  );
}
