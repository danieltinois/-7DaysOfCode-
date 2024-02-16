import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;


  > main {

    background: #fff;
    padding: 0 30px 30px;
    width: 90%;

    margin-bottom: 360px;

    .content {
      display: flex;

      section {
        flex: 1;
      }
      aside {
        min-width: 250px;
      }
    }
  }

  aside {
    margin-left: 30px;
    margin-top: 27px;
  }
`;

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
  padding: 50px 0px;

  font-size: 30px;
  font-weight: 900;

  > button {
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 900;

    background: transparent;
    border: none;

    margin-right: 115px;

    cursor: pointer;

    opacity: 50%;

    > svg {
      margin-right: 5px;
    }

    &:hover {
      opacity: 100%;
    }
  }
`;
