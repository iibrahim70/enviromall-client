import { Link, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUserCheck, BiSolidDashboard } from "react-icons/bi";
import { FaCartPlus, FaListUl, FaHandHoldingUsd } from "react-icons/fa";

const Dashboard = () => {
  const sidebarItems = (
    <div className="flex flex-col h-full font-medium text-base space-y-2 p-5 dashboard-button bg-slate-900">
      <Link>
        <BiSolidDashboard className="h-5 w-5" />
        Dashboard
      </Link>
      <Link>
        <BiSolidUserCheck className="h-5 w-5" />
        Customer List
      </Link>
      <Link to="orders-list">
        <FaHandHoldingUsd className="h-5 w-5" />
        Orders List
      </Link>
      <Link to="products-list">
        <FaListUl className="h-5 w-5" />
        Products List
      </Link>
      <Link to="add-products">
        <FaCartPlus className="h-5 w-5" />
        Add Products
      </Link>
      <div className="py-5">
        <hr />
      </div>
      <Link to="/">
        <AiFillHome className="h-5 w-5" /> Home
      </Link>
    </div>
  );

  return (
    <>
      <div className="drawer bg-slate-700 z-10 flex-none lg:hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div className="flex mx-auto font-semibold text-xl">EnviroMall</div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-0 w-80 h-full bg-base-200">{sidebarItems}</ul>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-white">
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-0 w-80 h-full bg-base-200 text-base-content">
            {sidebarItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
