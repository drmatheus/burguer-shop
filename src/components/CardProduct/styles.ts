import styled from "styled-components";

export const StyledLi = styled.li`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-gray-100);
  border-radius: var(--radius-1);
  gap: 14px;

  :last-child {
    margin-right: 1rem;
  }

  div {
    width: 100%;
    background-color: var(--color-gray-00);
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  div + div {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    background-color: transparent;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-gray-600);
    margin-bottom: -10px;
  }

  span {
    font-size: 12px;
    color: var(--color-gray-300);
  }

  span + span {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-primary);
  }

  button {
    min-height: 40px;
    color: var(--color-gray-00);
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
    padding: 0 20px;
    border-radius: var(--radius-1);
    background-color: var(--color-primary);
    border: none;
  }
`;
