import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 1280px;
  margin: 0 auto;
  gap: 16px;
  padding-top: 100px;

  ul {
    display: flex;
    overflow-x: scroll;
    height: 350px;
    width: calc(100vw - 1rem);
    margin-left: 1rem;
    padding-right: 0;
    gap: 1rem;
    padding-bottom: 1rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  & > h2 {
    margin-left: 16px;
    margin-bottom: 8px;
    color: var(--color-gray-300);
  }

  *::-webkit-scrollbar {
    width: 12px;
    padding-right: 1rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-gray-00);
    border-radius: var(--radius-1);
  }

  *::-webkit-scrollbar-thumb {
    background-color: #27ae60;
    border-radius: 10px;
    border: 3px solid var(--color-gray-00);
  }
`;
