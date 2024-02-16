import styled from "styled-components";

export const Container = styled.div`
  .box {
    margin-bottom: 15px;
    border: 1px solid #ccc;

    background: #eee;
    color: #222;

    header {
      padding: 15px 20px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
    }
    .info {
      padding: 20px;
      font-size: 16px;

      > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        color: #555;

        &:last-child {
          margin: 0;
        }
      }
    }
    footer {
      padding: 15px 20px;
      background: #ddd;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }
  }

  > button {
    border: 0;
    padding: 15px 0;
    color: white;
    background: ${({ theme }) => theme.COLORS.YELLOW};
    display: block;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;

    cursor: pointer;

    &:hover {
      opacity: 80%;
    }

    > a {
      color: white;
    }
  }
`;

export const BtnDiscount = styled.button`
  color: ${({ theme }) => theme.COLORS.YELLOW};
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    opacity: 60%;
  }
`;

export const TotalPrice = styled.span`
  color: ${({ theme }) => theme.COLORS.GREEN};
`;
