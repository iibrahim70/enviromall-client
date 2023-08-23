import Hero from "../components/hero/Hero";
import useTitle from "../hooks/useTitle";
import Products from "./Products";

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
