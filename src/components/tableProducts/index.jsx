// TableProducts.jsx
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { Container, TrStyle, TbodyStyle } from "./styles";
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";

export function TableProducts({ onUpdateTotal }) {
  const { productsCart, removeProductToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(productsCart.map(() => 1));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcula o total com base nos produtos e quantidades
    const newTotal = productsCart.reduce((acc, product, index) => {
      return acc + product.preco * quantities[index];
    }, 0);
    setTotal(newTotal);
    // Chama a função de callback onUpdateTotal com o novo total
    onUpdateTotal(newTotal);
  }, [productsCart, quantities, onUpdateTotal]);

  function handleRemoveFromCart(index) {
    removeProductToCart(index);
  }

  function handleIncreaseQuantity(index) {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  }

  function handleDecreaseQuantity(index) {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  }

  function precoToal(product, index) {
    return product.preco * quantities[index];
  }

  return (
    <Container>
      <table>
        {/* Cabeçalho da tabela */}
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
            <th>-</th>
          </tr>
        </thead>
        {/* Corpo da tabela */}
        <tbody>
          {productsCart.length === 0 ? (
            // Se o carrinho estiver vazio
            <TbodyStyle>
              <TrStyle>
                <span>O carrinho está vazio...</span>
              </TrStyle>
            </TbodyStyle>
          ) : (
            // Se houver itens no carrinho
            productsCart.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product">
                    <img src={product.img} alt="" />
                    <div className="info">
                      <div className="name">{product.name}</div>
                      <div className="category">Natural</div>
                    </div>
                  </div>
                </td>
                <td>R$ {product.preco}</td>
                <td>
                  <div className="qty">
                    <button onClick={() => handleDecreaseQuantity(index)}>
                      <FaMinus />
                    </button>
                    <span>{quantities[index]}</span>
                    <button onClick={() => handleIncreaseQuantity(index)}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td>R$ {precoToal(product, index).toFixed(2)}</td>
                <td>
                  <button
                    className="remove"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
}
