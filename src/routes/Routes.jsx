import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CartItems from "../pages/CartItems";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProducts from "../pages/dashboard/AddProducts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/cart-items",
        element: <CartItems />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-products",
        element: <AddProducts />,
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default Router;
