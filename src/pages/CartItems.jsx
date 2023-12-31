import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CartsTable from "../components/carts/CartsTable";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const CartItems = () => {
  useTitle("Cart Items");

  const [cartItems, setCartItems] = useState([]);
  const {
    isLoading,
    error,
    data: productsData,
  } = useQuery(["cart-items"], () =>
    axios
      .get("https://enviromall-server.vercel.app/products")
      .then((res) => res.data)
  );

  // Retrieve the cart items from local storage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  // Filter product data to match the cart items by ID
  const cartProducts = productsData.filter((product) =>
    cartItems.includes(product._id)
  );

  // Define a function to remove items from the cart
  const handleRemoveFromCart = (id) => {
    Swal.fire({
      title: "Remove Item",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCartItems = cartItems.filter((itemId) => itemId !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        // Show success Swal notification
        Swal.fire(
          "Removed!",
          "The item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  return (
    <>
      {cartProducts.length === 0 ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <p>No items in your cart</p>
        </div>
      ) : (
        <div className="my-10">
          {cartProducts.map((product) => (
            <CartsTable
              key={product._id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CartItems;
