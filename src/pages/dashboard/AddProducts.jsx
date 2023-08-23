import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../../components/button/Button";

function AddProducts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/products", data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        console.error("Error adding products:", error);
      });
  };

  return (
    <div className="w-[60%] mx-auto my-10 shadow-2xl p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="text-color">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Products Name</label>
          <input
            type="text"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="text"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Available Quantity</label>
          <input
            type="text"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Image Url</label>
          <input
            type="text"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Detail Description</label>
          <textarea
            type="text"
            rows="4"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <Button size="full">Add Product</Button>
      </form>
    </div>
  );
}

export default AddProducts;
