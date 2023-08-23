import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");

  return (
    <div className="w-full h-full text-color flex flex-col items-center justify-center">
      <h3 className="text-3xl font-semibold">Welcome To Admin Dashboard...</h3>
    </div>
  );
};

export default Dashboard;
