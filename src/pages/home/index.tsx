import { useContext } from "react";
import { CardProduct } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/authContext";
import { CartProvide } from "../../context/cartContext";
import { HomeStyled } from "./style";

export function Home() {
  const { isLoading, filteredMenu, filterMenu } = useContext(AuthContext);

  if (isLoading) {
    return null;
  }

  return (
    <HomeStyled>
      {filterMenu.length > 0 && <h2>Você pesquisou por: "{filterMenu}" </h2>}
      <CartProvide>
        <Header />
        <ul>
          {filteredMenu.map((element) => {
            return <CardProduct key={element.id} product={element} />;
          })}
        </ul>
      </CartProvide>
    </HomeStyled>
  );
}
