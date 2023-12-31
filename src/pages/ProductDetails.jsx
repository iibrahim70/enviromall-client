import { useLoaderData } from "react-router-dom";
import Button from "../components/button/Button";
import useTitle from "../hooks/useTitle";

const ProductDetails = () => {
  useTitle("Product Details");

  const productDetails = useLoaderData();
  const { name, image, price, quantity, description } = productDetails;

  return (
    <div className="w-[90%] mx-auto py-10 grid grid-cols-1 xl:grid-cols-2 gap-10">
      <img className="rounded" src={image} alt={name} />
      <div className="space-y-2 flex justify-center flex-col">
        <h3 className="text-xl font-semibold truncate">{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Description: {description}</p>
        <div>
          <Button colors="secondary" size="small">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
