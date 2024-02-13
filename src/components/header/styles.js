import styled from "styled-components";

export const Container = styled.div`
  width: 100%; /* Mudança */
  max-width: 1203px; /* Mudança */

  position: fixed;
  left: 50%; /* Mudança */
  transform: translateX(-50%); /* Mudança */
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;

  z-index: 1000;
`;

export const ContentUl = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 10px; /* Espaço entre os itens */
  line-height: 19.5px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLACK};

  &:not(:last-child)::after {
    /* Adiciona a barra depois de cada item, exceto o último */
    content: "/";
    margin-left: 10px; /* Espaço entre a barra e o próximo item */
  }

  a {
    transition: all ease 0.3s;

    &:hover {
      opacity: 50%;
    }
  }
`;
