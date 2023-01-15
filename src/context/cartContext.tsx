import { createContext, useContext, useEffect, useState } from "react";
import { IMenu } from "./authContext";

export const CartContext = createContext({} as IValueCartContext);

interface ICartContext {
  children: React.ReactNode;
}

interface IValueCartContext {
  addToCart(element: IMenuCart): void;
  cartItems: IMenuCart[];
  setCartItems: ([]) => void;
  removeItem: (element: IMenuCart) => void;
  increaseQuantity: (element: IMenuCart) => void;
  decreaseQuantity: (element: IMenuCart) => void;
}

export interface IMenuCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}

export function CartProvide({ children }: ICartContext) {
  const cart: IMenuCart[] = JSON.parse(
    localStorage.getItem("@burguerKenzie:cart")!
  );
  const [cartItems, setCartItems] = useState(cart || ([] as IMenuCart[]));

  useEffect(() => {
    localStorage.setItem("@burguerKenzie:cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function removeItem(element: IMenuCart) {
    const removingItem = cartItems.filter((item: IMenuCart) => {
      return item.id !== element.id;
    });
    setCartItems(removingItem);
  }

  function increaseQuantity(element: IMenuCart) {
    const newState = cartItems.map((item) => {
      if (item.id === element.id) {
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });

    setCartItems(newState as IMenuCart[]);
  }

  function decreaseQuantity(element: IMenuCart) {
    const newState = cartItems.map((item) => {
      if (item.id === element.id) {
        item.quantity--;
        return item;
      } else {
        return item;
      }
    });

    setCartItems(newState as IMenuCart[]);
  }

  function addToCart(element: IMenu) {
    const findMyItem = cartItems.find((item: IMenuCart): boolean => {
      return item.id === element.id;
    });

    if (findMyItem) {
      setCartItems(
        cartItems.map((item: IMenuCart) => {
          if (item.id === findMyItem.id) {
            item.quantity++;

            return item;
          } else {
            return item;
          }
        })
      );
    } else {
      element.quantity = 1;

      setCartItems([...cartItems, element as IMenuCart]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        setCartItems,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
