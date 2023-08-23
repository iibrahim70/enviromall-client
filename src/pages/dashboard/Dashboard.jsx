import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const sidebarItems = (
    <div className="flex flex-col h-full  font-medium text-base space-y-2 p-5 dashboard-button">
      <Link>Dashboard</Link>
      <Link>Order List</Link>
      <Link>Customer List</Link>
      <Link>Products List</Link>
      <Link to="add-products">Add Products</Link>
      <Link to="/">Home</Link>
    </div>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-white">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-0 w-80 h-full bg-base-200 text-base-content">
          {sidebarItems}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
