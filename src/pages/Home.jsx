import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero />
      <Products />
    </>
  );
};

export default Home;
