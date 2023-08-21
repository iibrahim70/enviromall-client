import React from "react";
import ProductCard from "./ProductCard";
import products from "/public/products.json";

const Products = () => {
  return (
    <div className="w-[90%] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
