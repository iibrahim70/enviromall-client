import ProductCard from "../components/products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  const { isLoading, error, data } = useQuery(["products"], () =>
    axios.get("http://localhost:5000/products").then((res) => res.data)
  );

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

  return (
    <div className="bg-slate-800 py-10">
      <div className="w-[90%] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
