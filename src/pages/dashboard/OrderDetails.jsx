import { useLoaderData } from "react-router-dom";
import Button from "../../components/button/Button";

const OrderDetails = () => {
  const orderDetails = useLoaderData();
  const { productName, image, price, description } = orderDetails;

  return (
    <div>
      <div className="w-[90%] mx-auto py-10 grid grid-cols-1 xl:grid-cols-2 gap-10">
        <img className="rounded" src={image} alt={productName} />
        <div className="space-y-2 flex justify-center flex-col">
          <h3 className="text-xl font-semibold truncate">{productName}</h3>
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
    </div>
  );
};

export default OrderDetails;
