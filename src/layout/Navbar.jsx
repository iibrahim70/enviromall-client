import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Button, { buttonVariants } from "../components/button/Button";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <div className="space-x-5 font-medium text-base navbar-button">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart-items">Cart Items</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );

  return (
    <nav className="shadow-2xl">
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="font-semibold text-xl">
            EnviroMall
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Button onClick={handleLogout} size="small">
              Signout
            </Button>
          ) : (
            <Link
              to="/signin"
              className={buttonVariants({ colors: "primary", size: "small" })}
            >
              Signin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
