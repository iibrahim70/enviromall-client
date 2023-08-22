import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

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
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default Router;
