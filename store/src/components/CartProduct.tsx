
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductsStore";
import { CartItem } from "../Types";

function CartProduct(props: CartItem & { selectedColor: string }) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  const selectedColor =
    props.selectedColor && props.selectedColor === "red finish"
      ? "red finish"
      : "normal";

  console.log("Product ID:", id);
  console.log("Quantity:", quantity);
  console.log("Selected Color:", selectedColor);

  return (
    <div className="flex items-center border-b p-2">
      <div className="flex items-center justify-center w-1/4">
        <div className="">
          <h3>{productData?.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <div className="">
          <p className="">{quantity} total</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <div className="color-container">
          <p>color: {selectedColor}</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <div className="">
          <p className="">
            ${(quantity * (productData?.price || 0)).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <div className="">
          <button
            className="bg-red-400 px-4 pt-2 pb-2 rounded-md hover:bg-red-500 text-white"
            onClick={() => cart.deleteFromCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
