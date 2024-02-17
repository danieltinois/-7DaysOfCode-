import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Summary } from "../../components/summary";
import { TableProducts } from "../../components/tableProducts";
import { Container, TitleCart } from "./styles";

import { AiOutlineRollback } from "react-icons/ai";

export function Cart() {
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <main>
        <TitleCart>
          <span>Seu Carrinho</span>
          <button type="button" onClick={handleBack}>
            <AiOutlineRollback /> Voltar
          </button>
        </TitleCart>
        <div className="content">
          <section>
            <TableProducts onUpdateTotal={setTotal} />
          </section>
          <aside>
            <Summary total={total} />
          </aside>
        </div>
      </main>
    </Container>
  );
}
