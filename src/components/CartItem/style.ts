import trash from "../../assets/img/trash.svg";
import styled from "styled-components";

export const StyledCartLi = styled.li`
  min-height: 80px;
  width: 100%;
  display: flex;
  gap: 1rem;
  position: relative;

  & > div {
    width: 80px;
    height: 80px;
    border-radius: var(--radius-1);
    background-color: var(--color-gray-100);
    display: flex;
    justify-content: center;
    align-content: center;
  }

  & > div + div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
  }

  & > img {
    width: 80px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-gray-600);
    max-width: 16ch;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > button {
    width: 28px;
    height: 28px;
    position: absolute;
    right: 0px;
    top: 0px;
    border: none;
    background-image: url(${trash});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
  }
`;

export const ButtonQuantity = styled.div`
  width: 105px;
  display: flex;

  button {
    width: 34px;
    height: 30px;
    border: none;
    color: var(--color-secundary);
    font-size: 22px;
  }

  p {
    text-align: center;
    padding-top: 4px;
    width: 55px;
    height: 30px;
    border: 2px solid var(--color-gray-00);
    background-color: var(--color-white);
  }
`;
