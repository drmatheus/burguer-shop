import { Dialog } from "@reach/dialog";
import styled from "styled-components";

export const MyDialog = styled(Dialog)`
  width: calc(100vw - 2rem);
  max-width: 500px;
  flex-direction: column;
  padding: 0;
  border-radius: var(--radius-1);

  & > div:first-child {
    width: 100%;
    height: 54px;
    background-color: var(--color-primary);
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    border-radius: 8px 8px 0px 0px;
  }

  & > div > h2 {
    font-size: 22px;
    color: var(--color-gray-00);
  }

  & > div:first-child button {
    position: absolute;
    right: 1.2rem;
    top: 12px;
    font-size: 20px;
    color: #ffffff77;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: transparent;
  }

  & > ul {
    width: 100%;
    min-height: 140px;
    max-height: 350px;
    overflow-y: scroll;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > ul + div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    border-top: 2px solid var(--color-gray-100);
    flex-wrap: wrap;
  }

  & > ul + div button {
    width: 100%;
  }

  span + span {
    color: var(--color-gray-300);
    font-weight: 600;
  }

  span {
    color: var(--color-gray-600);
    font-weight: 600;
  }

  ul + div > button {
    background-color: var(--color-gray-100);
    height: 48px;
    border: none;
    border-radius: var(--radius-1);
    color: var(--color-gray-300);
    font-weight: 600;
  }
`;
