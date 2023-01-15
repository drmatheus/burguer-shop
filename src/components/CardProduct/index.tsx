import { StyledLi } from "./styles";
import { IMenu } from "../../context/authContext";
import { useContext } from "react";
import { CartContext, IMenuCart } from "../../context/cartContext";

export interface IProduct {
  product: IMenu;
}

export function CardProduct({ product }: IProduct) {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledLi>
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <span>R$ {product.price.toFixed(2)}</span>
        <button onClick={() => addToCart(product as IMenuCart)}>
          Adicionar
        </button>
      </div>
    </StyledLi>
  );
}
