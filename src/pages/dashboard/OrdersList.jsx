import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const OrdersList = () => {
  const { isLoading, error, data } = useQuery(["orders"], () =>
    axios.get("http://localhost:5000/orders").then((res) => res.data)
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
              <th>Price</th>
              <th>Ordered Date</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.orderedDate}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/orders/${item?._id}`} className="btn btn-sm">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
