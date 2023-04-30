import Image from "next/image";
import Link from "next/link";

export default function SearchProduct(props: { product: any }) {
  return (
    <Link
      href={`/products/${props.product.id}/${props.product.slug}`}
      className="basis-[300px]"
    >
      <div className="flex h-[400px] cursor-pointer flex-col justify-start gap-4 rounded-md border border-gray-100 bg-white p-3 drop-shadow-sm transition-all hover:drop-shadow-2xl">
        <div className="relative basis-[300px]">
          <Image
            src={props.product.image}
            alt={props.product.product_name}
            fill
            className="object-contain"
          />
        </div>
        <p className="multiline-ellipsis basis-[50px] text-sm">
          {props.product.product_name}
        </p>
        <div className="basis-[50px]">
          {props.product.price != 0 ? (
            <p className="font-bold">{props.product.price}</p>
          ) : (
            <button className="cursor-pointer font-bold uppercase">
              Ask for price
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
