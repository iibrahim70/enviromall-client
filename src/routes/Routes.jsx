import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {},
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default Router;
