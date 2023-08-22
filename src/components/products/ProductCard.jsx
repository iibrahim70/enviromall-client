import React from "react";
import { Link } from "react-router-dom";
import Button, { buttonVariants } from "../button/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-xl rounded-xl p-5 space-y-2">
      <img
        className="rounded-xl h-[200px] w-full"
        src={product?.image}
        alt={product?.name}
      />
      <h3 className="text-xl font-semibold truncate">{product?.name}</h3>
      <p>Price: ${product?.price}</p>
      <p>Quantity: {product?.quantity}</p>
      <div className="flex justify-between">
        <Link
          to={`/products/${product?._id}`}
          className={buttonVariants({ colors: "secondary", size: "small" })}
        >
          Details
        </Link>
        <Button size="small">Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
