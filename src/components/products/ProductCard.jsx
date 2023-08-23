import React from "react";
import { Link } from "react-router-dom";
import Button, { buttonVariants } from "../button/Button";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const handleAddToCart = (id) => {
    // Retrieve the existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the ID already exists in the cart
    if (!existingCartItems.includes(id)) {
      // Add the new item to the cart if it doesn't exist
      const updatedCartItems = [...existingCartItems, id];

      // Update the local storage with the updated cart items
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Display a message indicating that the product is already in the cart
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Product is already in the Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="shadow-2xl rounded-xl p-5 space-y-2">
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
        <Button onClick={() => handleAddToCart(product?._id)} size="small">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
