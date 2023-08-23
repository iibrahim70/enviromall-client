import Button from "../button/Button";

const CartsTable = ({ product, handleRemoveFromCart }) => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="shadow-2xl rounded-xl p-5 grid grid-cols-2 gap-10 mb-10">
        <img
          className="rounded-xl h-[200px] w-full"
          src={product?.image}
          alt={product?.name}
        />
        <div className="space-y-2 flex justify-center flex-col">
          <h3 className="text-xl font-semibold truncate">{product?.name}</h3>
          <p>Price: ${product?.price}</p>
          <p>Quantity: {product?.quantity}</p>
          <div className="flex justify-end">
            <Button
              onClick={() => handleRemoveFromCart(product?._id)}
              size="small"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsTable;
