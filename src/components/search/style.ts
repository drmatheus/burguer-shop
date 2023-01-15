import styled from "styled-components";
import search from "../../assets/img/search.png";

export const StyledSearch = styled.section`
  width: 100vw;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: var(--color-gray-00);

  & > input {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    background-color: var(--color-gray-00);
    border-radius: var(--radius-1);
    border: 2px solid var(--color-gray-200);
    padding-left: 12px;
  }

  & > button {
    background-color: var(--color-primary);
    background-image: url(${search});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    width: 60px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: var(--radius-1);
    border: none;
  }

  @media (min-width: 660px) {
    display: none;
  }
`;

export const StyledSearchDesktop = styled.section`
  width: 300px;
  height: 60px;
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: -16px;

  & > input {
    width: calc(100% - 2rem);
    height: calc(100% - 1rem);
    background-color: #fff;
    border-radius: var(--radius-1);
    border: 2px solid var(--color-gray-100);
    padding-left: 12px;
  }

  & > button {
    background-color: var(--color-primary);
    background-image: url(${search});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    width: 40px;
    height: 30px;
    position: absolute;
    right: 24px;
    top: 15px;
    border-radius: var(--radius-1);
    border: none;
  }

  @media (min-width: 660px) {
    display: flex;
  }
`;
