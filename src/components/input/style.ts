import styled from "styled-components";

export const StyledInput = styled.label`
  width: 100%;
  display: flex;
  position: relative;
  background-color: var(--color-white);
  padding-top: 8px;
  padding-bottom: 4px;

  & > input {
    width: 100%;
    background-color: var(--color-white);
    border-radius: var(--radius-1);
    border: transparent;
    padding-left: 1rem;
    height: 60px;

    background-color: var(--color-gray-100);
  }

  & > span {
    width: fit-content;
    padding: 0 8px;
    color: var(--color-gray-200);
    font-size: 12px;
    position: absolute;
    left: 10px;
    top: 2px;
    background-color: var(--color-white);
    visibility: hidden;
  }

  input:hover + span {
    visibility: visible;
  }

  input:hover {
    border: 2px solid var(--color-gray-600);
    background-color: var(--color-white);
  }

  input:focus {
    border: 2px solid var(--color-gray-600);
    background-color: var(--color-white);
  }

  input:focus + span {
    visibility: visible;
  }

  input:not(:placeholder-shown) {
    border: 2px solid var(--color-gray-600);
    background-color: var(--color-white);
  }

  input:not(:placeholder-shown) + span {
    visibility: visible;
  }

  p {
    position: absolute;
    bottom: -14px;
    left: 8px;
    width: fit-content;
    font-size: 11px;
    font-weight: 500;
    color: var(--color-secundary);
  }
`;
