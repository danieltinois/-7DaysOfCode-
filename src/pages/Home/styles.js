import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1203px;
  display: flex;
  justify-content: space-between;

  > img {
    display: block;
    width: 787px;
    height: 1183px;

    position: relative;
    top: -208px;
    left: -225px;
    z-index: -1;
    user-select: none;
  }
`;

export const Information = styled.div`
  width: 585px;
  height: 462px;

  padding-top: 210px;

  > div {
    margin-bottom: 37px;

    span:nth-child(1) {
      font-size: 22px;
      line-height: 26.82px;
      opacity: 50%;
    }

    > h1 {
      font-family: "Elsie Swash Caps", serif;
      font-size: 82px;
      line-height: 94.46px;
      font-weight: 900;

      padding-bottom: 24px;
      padding-top: 12px;
    }
  }
`;

export const Text = styled.span`
  /* Aplica estilos apenas ao segundo span */
  opacity: 50%;
  line-height: 26px;
  width: 481px;
  display: inline-block;
`;
