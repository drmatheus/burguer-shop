import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (min-width: 939px) {
    & {
      gap: 64px;
    }
  }
`;
