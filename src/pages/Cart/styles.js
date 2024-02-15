import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  > main {
    background: #fff;
    padding: 0 30px 30px;
    min-width: 70%;

    margin-bottom: 100px;

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
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  padding: 50px 0;

  font-size: 30px;
  font-weight: 900;
`;
