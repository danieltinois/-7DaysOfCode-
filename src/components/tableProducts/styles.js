import styled from "styled-components";

export const Container = styled.div`
  button {
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        border-bottom: 3px solid #eee;
        th {
          text-align: left;
          padding-bottom: 10px;
          padding: 0px 5px;
          text-transform: uppercase;
          color: #666;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 3px solid #eee;

        &:last-child {
          border: 0;
        }

        td {
          padding: 30px 0px;
        }
      }
    }
  }

  .product {
    display: flex;
    align-items: center;

    img {
      border-radius: 6px;
      width: 150px;
    }

    .info {
      margin-left: 20px;
      .name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .category {
        color: #666;
      }
    }
  }
  .qty {
    background: #eee;
    display: inline-flex;
    padding: 0 0;
    justify-content: space-around;
    align-items: center;
    min-width: 60px;
    border-radius: 20px;
    overflow: hidden;
    height: 30px;

    span {
      margin: 0 10px;
    }

    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: 0;
      padding: 0 10px;
      font-size: 20px;
      height: 100%;

      &:hover {
        background: #ddd;
      }
    }
  }
  .remove {
    background: #eee;
    border: 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    &:hover {
      background: #ddd;
    }
  }
`;

export const TbodyStyle = styled.tbody`
  width: 218%;
  height: 300px;

  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrStyle = styled.tr``;
