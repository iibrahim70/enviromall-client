import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>, 
    children: [
      
    ]
  },
  {path: '/signin', element: <Signin/>},
  {path: '/signup', element: <Signup/>}
])

export default Router;