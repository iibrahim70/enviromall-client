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
import DashboardLayout from "../layout/DashboardLayout";
import CustomersList from "../pages/dashboard/CustomersList";

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
          fetch(`https://enviromall-server.vercel.app/products/${params.id}`),
      },
      {
        path: "orders/:id",
        element: <OrderDetails />,
        loader: ({ params }) =>
          fetch(`https://enviromall-server.vercel.app/orders/${params.id}`),
      },
      {
        path: "/cart-items",
        element: <CartItems />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "customers-list",
        element: <CustomersList />,
      },
      {
        path: "orders-list",
        element: <OrdersList />,
      },
      {
        path: "products-list",
        element: <ProductsList />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default Router;
