import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";

const ProductsList = () => {
  const { isLoading, error, data, refetch } = useQuery(["allCars"], () =>
    axios.get("http://localhost:5000/products").then((res) => res.data)
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

  const handleClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/products/${id}`)
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Your item has been deleted.",
            });
            refetch();
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      }
    });
  };

  return (
    <div className="bg-red-100 w-full h-full flex items-center justify-center py-10">
      <div className="overflow-x-auto">
        <table className="table text-color">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`/products/${item?._id}`} className="btn btn-sm">
                    Details
                  </Link>
                </td>
                <td
                  onClick={() => handleClick(item?._id)}
                  className="cursor-pointer"
                >
                  <BsTrash3Fill className="w-5 h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
