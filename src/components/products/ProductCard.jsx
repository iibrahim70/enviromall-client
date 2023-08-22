import React from "react";

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
        <button className="secondary-button">Details</button>
        <button className="primary-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
