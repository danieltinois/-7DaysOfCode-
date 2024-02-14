import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  top: -220px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 22px;
    line-height: 26.82px;
    opacity: 50%;

    margin-bottom: 12px;
  }

  > h1 {
    font-family: "Elsie Swash Caps", serif;
    font-size: 82px;
    font-weight: 900;
    line-height: 94.46px;

    margin-bottom: 5px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-rows: repeat(2 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const Card = styled.div`
  display: flex;

  width: 380px;
  height: 200px;

  background: ${({ theme }) => theme.COLORS.WHITE};

  filter: ${({ blur }) => (blur ? "blur(0px)" : "none")};

  user-select: ${({ blur }) => (blur ? "none" : "select")};

  transition: transform ease 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgContent = styled.div`
  width: 170px;
  overflow: hidden;

  margin-right: 10px;

  > img {
    user-select: none;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 27px 0px;

  .out-of-stock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    color: red;
    z-index: 1;

    filter: ${({ blur }) => (blur ? "blur(0)" : "none")};
  }

  > h1 {
    font-family: "Elsie Swash Caps", serif;
    font-size: 32px;
    font-weight: 900;
    line-height: 36.86px;

    margin-bottom: 8px;
  }

  > span {
    opacity: 50%;

    font-size: 16px;
    line-height: 19.5px;

    margin-bottom: 24px;
  }

  > button {
    display: flex;
    align-items: center;

    font-size: 16px;
    line-height: 19.5px;

    color: ${({ theme }) => theme.COLORS.YELLOW};

    border: none;
    background: none;

    cursor: pointer;

    svg {
      position: relative;
      left: 25px;
    }

    &:hover {
      font-weight: bold;
    }
  }
`;
