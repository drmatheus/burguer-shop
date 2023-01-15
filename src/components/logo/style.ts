import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;

  > h2 {
    font-size: 32px;
    color: var(--color-gray-600);
  }

  > h3 {
    font-size: 24px;
    color: var(--color-secundary);
  }

  @media (max-width: 400px) {
    > h2 {
      font-size: 26px;
    }

    > h3 {
      font-size: 20px;
    }

    gap: 2px;
  }
`;
