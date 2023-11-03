
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "../css/addToCart.css";
import { toast } from "react-toastify";

interface AddToCartButtonProps {
  productId: string;
  selectedQuantity: number;
  selectedColor: string;
}

function AddToCartButton({
  productId,
  selectedQuantity,
  selectedColor,
}: AddToCartButtonProps) {
  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    cart.addOneToCart(productId, selectedQuantity, selectedColor);

    // Trigger a toast notification
    toast.success("Product added to the cart", {
      position: "top-center",
    });
  };

  return (
    <div>
      <button
        className="text-sm  font-medium bg-blue-500 cursor-pointer px-10 pt-2 pb-2 rounded-md text-white hover:bg-blue-600  transition ease-in"
        onClick={handleAddToCart}
      >
        {cart.getProductQuantity(productId) > 0 ? `Add to Cart` : "Add to Cart"}
      </button>
    </div>
  );
}

export default AddToCartButton;
