import { useContext } from "react";

import { CartContext, IMenuCart } from "../../context/cartContext";
import { CartItem } from "../CartItem";

interface ICartProps {
  dialogOnOff: () => void;
}

export function Cart({ dialogOnOff }: ICartProps) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  return (
    <>
      <div>
        <h2>Carrinho de compras</h2>
        <button onClick={dialogOnOff}>X</button>
      </div>
      <ul>
        {cartItems.map((item: IMenuCart) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <div>
        <span>Total</span>
        <span>R$ {total.toFixed(2)}</span>
        <button onClick={() => setCartItems([])}>Remover Todos</button>
      </div>
    </>
  );
}
