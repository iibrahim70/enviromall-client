import Products from "../../pages/Products";
const ProductsComponent = () => {
  return (
    <div className="bg-slate-800 pt-10">
      <div className="space-y-5">
        <h3 className="text-3xl font-semibold text-center">Our Products</h3>
        <p className="w-[90%] lg:w-[50%] mx-auto">
          We offer a wide range of high-quality products to meet your needs. Our
          team works tirelessly to ensure that every product we offer is crafted
          with precision and care, providing you with the best possible
          experience.
        </p>
      </div>
      <Products />
    </div>
  );
};

export default ProductsComponent;
