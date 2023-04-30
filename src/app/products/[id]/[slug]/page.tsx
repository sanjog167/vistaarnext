import FullDescription from "./components/FullDescription";
import ProductDetails from "./components/ProductDetails";
import SellerInformation from "./components/SellerInfo";

async function fetchProductDetails(id: string, slug: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/products/${id}/${slug}/`
  );
  if (!res.ok) {
    if (res.status == 404) {
      throw new Error("Product does not exist!");
    }
    throw new Error("Something went wrong");
  }

  const json = await res.json();
  return json;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string; slug: string };
}) {
  try {
    var productDetails = await fetchProductDetails(params.id, params.slug);
  } catch (e: any) {
    return <p>{e.message}</p>;
  }

  return (
    <div className="flex items-start gap-2">
      <div className="m-2 basis-[75%] border p-2">
        <ProductDetails product={productDetails} />
        <FullDescription content={productDetails.description} />
      </div>
      <SellerInformation supplier={productDetails.supplier} />
    </div>
  );
}
