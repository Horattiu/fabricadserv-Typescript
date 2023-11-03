import { createContext, useState, ReactNode } from "react";
import { getProductData } from "./ProductsStore";

interface CartItem {
  id: string;
  quantity: number;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  getProductQuantity: (id: string) => number;
  addOneToCart: (
    id: string,
    quantityToAdd: number,
    selectedColor: string
  ) => void;
  removeOneFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalCost: () => number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  function getProductQuantity(id: string): number {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(
    id: string,
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
          selectedColor: selectedColor,
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

  function removeOneFromCart(id: string): void {
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

  function deleteFromCart(id: string): void {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
  }

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
