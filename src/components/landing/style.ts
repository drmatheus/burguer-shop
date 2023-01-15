import styled from "styled-components";
import shoppingBag from "../../assets/img/shoppingBag.svg";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100vw - 2rem);

  max-width: 500px;

  section {
    width: 377px;
    max-width: calc(100vw - 2rem);
    padding: 14px;
    border: 2px solid var(--color-gray-100);
    border-radius: var(--radius-1);
    display: flex;
    gap: 1rem;
    align-items: center;
    -webkit-box-shadow: 2px 2px 7px 5px rgba(165, 165, 165, 0.23);
    box-shadow: 2px 2px 7px 5px rgba(165, 165, 165, 0.23);
  }

  section > div {
    width: 60px;
    height: 60px;
    background-color: #27ae601a;
    background-image: url(${shoppingBag});

    background-position: center;
    background-size: 28px;
    background-repeat: no-repeat;
    border-radius: var(--radius-1);
  }

  section > p {
    max-width: 70%;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-gray-300);
  }

  img {
    width: 181px;
    margin-top: 10px;
    display: none;
  }

  @media (min-width: 941px) {
    img {
      display: flex;
    }

    & {
      width: 377px;
    }
  }
`;
