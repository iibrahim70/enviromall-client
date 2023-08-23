import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTitle from "../../hooks/useTitle";

const CustomersList = () => {
  useTitle("Customers List");

  const { isLoading, error, data } = useQuery(["customers"], () =>
    axios
      .get("https://enviromall-server.vercel.app/customers")
      .then((res) => res.data)
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );
  return (
    <div className="w-full h-full flex items-center justify-center py-10 text-color">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersList;
