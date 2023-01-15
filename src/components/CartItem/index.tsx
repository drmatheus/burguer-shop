import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ButtonQuantity, StyledCartLi } from "./style";

export function CartItem({ item }: any) {
  const { removeItem, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <StyledCartLi>
      <div>
        <img src={item.img} alt="" />
      </div>
      <div>
        <h2>{item.name}</h2>
        <ButtonQuantity>
          <button
            onClick={() => decreaseQuantity(item)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => increaseQuantity(item)}>+</button>
        </ButtonQuantity>
      </div>
      <button onClick={() => removeItem(item)}></button>
    </StyledCartLi>
  );
}
