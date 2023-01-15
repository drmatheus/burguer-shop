import styled from "styled-components";

export const StyledForm = styled.form`
  width: 500px;
  max-width: calc(100vw - 2rem);
  padding: 24px;

  border-radius: var(--radius-1);
  border: 2px solid var(--color-gray-100);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 22px;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  div:first-child {
    display: flex;
    justify-content: space-between;

    & > a {
      color: var(--color-gray-600);
      font-weight: 100;
      font-size: 14px;
      text-decoration: underline;
      width: fit-content;
      padding: 8px 12px;
      height: fit-content;
      background-color: transparent;
    }
  }

  button + p {
    color: var(--color-gray-300);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    width: 325px;
    max-width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: 8px 0;
    align-items: center;
  }

  a {
    width: 100%;
    height: 60px;
    background-color: var(--color-gray-00);
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: var(--radius-1);
    text-align: center;
    padding-top: 20px;
    text-decoration: none;
    color: var(--color-gray-200);
  }
`;
