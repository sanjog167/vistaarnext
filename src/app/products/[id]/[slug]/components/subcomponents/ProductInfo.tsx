import Link from "next/link";

export default function ProductInfo(props: { product: any }) {
  const productDescription = props.product.description as string;

  return (
    <div className="flex basis-[50%] flex-col gap-3">
      <h1 className="text-3xl font-bold">{props.product.product_name}</h1>
      <div className="flex flex-col text-sm">
        <p className="text-gray-600">
          Category:{" "}
          <Link
            href={`/category/${props.product.category.id}/${props.product.category.slug}`}
            className="font-bold text-gray-400"
          >
            {props.product.category.title}
          </Link>
        </p>
        <p className="text-gray-600">
          Subcategory:{" "}
          <Link
            href={`/subcategory/${props.product.sub_category.id}/${props.product.sub_category.slug}`}
            className="font-bold text-gray-400"
          >
            {props.product.sub_category.title}
          </Link>
        </p>
      </div>
      <div className="btn w-56 text-center text-sm font-normal normal-case">
        Available
      </div>
      <p className="text-sm text-gray-600">
        Sold by:{" "}
        <Link
          href={`/supplier/${props.product.supplier.id}`}
          className="guarantee font-bold text-gray-400"
        >
          {props.product.supplier.company_name}
        </Link>
      </p>
      <hr />
      <p className="text-xl font-bold">Price: {props.product.price}</p>
      <hr />
      <p className="text-xl font-bold">
        Minimum Order Quantity: {props.product.minimum_order_quantity}
      </p>
      <hr />
      <p className="text-sm font-bold">About This item</p>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{
          __html:
            productDescription.slice(0, 400) +
            (productDescription.length > 400 ? "..." : ""),
        }}
      />
    </div>
  );
}
