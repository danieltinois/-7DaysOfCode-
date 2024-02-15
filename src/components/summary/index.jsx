/* eslint-disable react/prop-types */
// Summary.jsx
import { Container } from "./styles";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Summary({ total }) {
  return (
    <Container>
      <div className="box">
        <header>Resumo da compra</header>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </footer>
      </div>
      <button>
        <a href="/">Finalizar Compra</a>
      </button>
    </Container>
  );
}
