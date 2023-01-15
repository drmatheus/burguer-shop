import { Logo } from "../logo/logo";
import { ButtonHeader, StyledHeader } from "./style";
import logout from "../../assets/img/logout.svg";
import cart from "../../assets/img/cart.svg";
import search from "../../assets/img/search.svg";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { MyDialog } from "../Modal/style";
import { Cart } from "../Modal";
import { SearchBar, SearchBarDesktop } from "../search";

interface IHeader {
  children?: React.ReactNode;
}

export function Header({ children }: IHeader) {
  const [showDialog, setShowDialog] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { cartItems } = useContext(CartContext);

  function dialogOnOff() {
    setShowDialog((oldState) => !oldState);
  }

  const totalItems = cartItems.reduce((t, c) => t + c.quantity, 0);

  return (
    <StyledHeader>
      {showSearch ? <SearchBar setState={setShowSearch} /> : null}
      <div>
        <Logo />
        <div>
          <ButtonHeader
            onClick={() => setShowSearch(!showSearch)}
            BackGround={search}
          />
          <SearchBarDesktop setState={setShowSearch} />
          <ButtonHeader BackGround={cart} onClick={dialogOnOff}>
            <p>{totalItems || 0}</p>
          </ButtonHeader>
          <ButtonHeader BackGround={logout} />
        </div>
      </div>
      <MyDialog isOpen={showDialog} onDismiss={dialogOnOff}>
        <Cart dialogOnOff={dialogOnOff} />
      </MyDialog>
    </StyledHeader>
  );
}
