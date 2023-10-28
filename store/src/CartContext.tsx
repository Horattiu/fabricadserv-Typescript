import { createContext, useState, ReactNode } from "react";
import { getProductData } from "./ProductsStore";

// Define the CartItem interface
interface CartItem {
  id: string; // Change the type of 'id' to string
  quantity: number;
  color: string; // You can specify the appropriate type for the color property
}

// Define the CartContextType interface with type annotations
interface CartContextType {
  items: CartItem[];
  getProductQuantity: (id: string) => number; // Change the type of 'id' to string
  addOneToCart: (
    id: string, // Change the type of 'id' to string
    quantityToAdd: number,
    selectedColor: string
  ) => void;
  removeOneFromCart: (id: string) => void; // Change the type of 'id' to string
  deleteFromCart: (id: string) => void; // Change the type of 'id' to string
  getTotalCost: () => number;
}

// Use the defined CartContextType for createContext
export const CartContext = createContext<CartContextType>({
  items: [],
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
});

// Define the CartProviderProps interface
interface CartProviderProps {
  children: ReactNode;
}

// Modify the CartProvider function to accept CartProviderProps
export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);
  

  // Add type annotations for the parameters and return value of getProductQuantity
  function getProductQuantity(id: string): number {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // Add type annotations for the parameters of addOneToCart
  function addOneToCart(
    id: string, // Change the type of 'id' to string
    quantityToAdd: number,
    selectedColor: string
  ) {
    const existingProduct = cartProducts.find((product) => product.id === id);

    if (!existingProduct) {
      // Product is not in the cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: quantityToAdd,
          color: selectedColor,
        },
      ]);
    } else {
      // Product is already in the cart, update its quantity
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + quantityToAdd }
            : product
        )
      );
    }
  }

  // Add type annotations for the parameter of removeOneFromCart
  function removeOneFromCart(id: string): void {
    // Change the type of 'id' to string
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  // Add type annotations for the parameter of deleteFromCart
  function deleteFromCart(id: string): void {
    // Change the type of 'id' to string
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
  }

  // Add type annotation for the return value of getTotalCost
  function getTotalCost(): number {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id);
      if (productData) {
        totalCost += productData.price * cartItem.quantity;
      }
    });
    return totalCost;
  }

  // Add type annotation for contextValue
  const contextValue: CartContextType = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
