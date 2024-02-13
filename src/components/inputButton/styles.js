import styled from "styled-components";

export const Container = styled.div`
  width: 585px;
  height: 75px;

  display: flex;
  align-items: center;

  > div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    padding-left: 17px;

    > svg {
      opacity: 30%;
    }

    > input {
      width: 100%;
      height: 100%;
      border: none;
      background: none;

      margin-left: 16px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        opacity: 30%;
      }
    }

    transition: all ease 0.4s;

    &:hover {
      box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.15),
        /* Sombra embaixo */ 4px 0px 20px rgba(0, 0, 0, 0.15),
        /* Sombra à esquerda */ 0px 4px 20px rgba(0, 0, 0, 0.15); /* Sombra em cima */
    }
  }
`;

export const Button = styled.button`
  min-width: 194px;
  height: 100%;

  border: none;
  background: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  transition: all ease-in-out 0.5s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW};
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }
`;
