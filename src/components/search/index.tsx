import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { StyledSearch, StyledSearchDesktop } from "./style";
import { ISearchProps } from "./types";

let searchValue: string = "";

export function SearchBar({ setState }: ISearchProps) {
  const { setFilterMenu } = useContext(AuthContext);

  return (
    <StyledSearch>
      <input
        placeholder="Digitar pesquisa"
        type="text"
        onChange={(e) => {
          searchValue = e.target.value;
          if (e.target.value.trim().length === 0) {
            setFilterMenu(e.target.value.trim());
          }
        }}
      />
      <button
        onClick={() => {
          setFilterMenu(searchValue);
          setState(false);
        }}
      ></button>
    </StyledSearch>
  );
}

export function SearchBarDesktop({ setState }: ISearchProps) {
  const { setFilterMenu } = useContext(AuthContext);

  return (
    <StyledSearchDesktop>
      <input
        onChange={(e) => {
          searchValue = e.target.value;
          if (e.target.value.trim().length === 0) {
            setFilterMenu(e.target.value.trim());
          }
        }}
        placeholder="Digitar pesquisa"
        type="text"
      />
      <button
        onClick={() => {
          setState(false);
          setFilterMenu(searchValue);
        }}
      ></button>
    </StyledSearchDesktop>
  );
}
