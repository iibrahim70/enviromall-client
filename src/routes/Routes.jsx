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
import ProductsList from "../pages/dashboard/ProductsList";
import OrdersList from "../pages/dashboard/OrdersList";
import OrderDetails from "../pages/dashboard/OrderDetails";

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
        path: "orders/:id",
        element: <OrderDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orders/${params.id}`),
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
      {
        path: "/dashboard/products-list",
        element: <ProductsList />,
      },
      {
        path: "/dashboard/orders-list",
        element: <OrdersList />,
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default Router;
