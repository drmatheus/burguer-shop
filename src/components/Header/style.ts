import styled from "styled-components";

interface IButtonHeader {
  BackGround?: string;
}

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: var(--color-gray-00);
  display: flex;

  & > div {
    display: flex;
    width: calc(100vw - 2rem);
    margin: 0 auto;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }

  div + div {
    margin-left: auto;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ButtonHeader = styled.button<IButtonHeader>`
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  width: 26px;
  height: 26px;
  background-color: transparent;

  border-radius: var(--radius-1);
  position: relative;
  border: none;
  background-image: url(${(props) => props.BackGround});

  p {
    width: 18px;
    height: 18px;
    position: absolute;
    right: -5px;
    top: -7px;
    background-color: var(--color-primary);
    color: var(--color-gray-00);
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    padding-top: 2px;
    border-radius: 4px;
  }

  @media (min-width: 660px) {
    &:first-child {
      display: none;
    }
  }
`;
