import styled from "styled-components";

export const Container = styled.div`
  /* width: 955px; */
  height: 440px;

  position: relative;
  top: -280px;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 585px;
    user-select: none;
  }
`;

export const TextContent = styled.div`
  width: 410px;
  height: 440px;
  background-color: white;

  display: flex;
  align-items: center;
  padding-left: 32px;

  span {
    opacity: 50%;
    font-size: 22px;
    line-height: 26.82px;
  }

  h1 {
    font-family: "Elsie Swash Caps", serif;
    font-size: 42px;
    line-height: 48.38px;
    font-weight: 900;

    margin-top: 12px;
    margin-bottom: 32px;
  }
`;

export const SubInformations = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 32px;

  span {
    padding-left: 16px;
  }
`;
