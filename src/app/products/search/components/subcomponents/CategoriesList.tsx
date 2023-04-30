"use client";

import CategoryEntry from "./CategoryEntry";

export default function CategoriesList(props: { categories: any[] }) {
  return (
    <div className="flex flex-col gap-2">
      {props.categories.map((category) => (
        <CategoryEntry
          allCategories={props.categories}
          category={category}
          key={category.id}
        />
      ))}
    </div>
  );
}
