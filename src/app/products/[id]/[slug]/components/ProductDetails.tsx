import ImagePreviews from "./subcomponents/ImagePreviews";
import ProductInfo from "./subcomponents/ProductInfo";

export default function ProductDetails(props: { product: any }) {
  return (
    <div className="flex gap-4">
      <ImagePreviews
        image1={props.product.image}
        image2={props.product.image2}
        image3={props.product.image3}
      />
      <ProductInfo product={props.product} />
    </div>
  );
}
