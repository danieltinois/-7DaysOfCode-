import { useState } from "react";

import { Summary } from "../../components/summary";
import { TableProducts } from "../../components/tableProducts";
import { Container, TitleCart } from "./styles";

export function Cart() {
  const [total, setTotal] = useState(0);

  return (
    <Container>
      <main>
        <TitleCart>Seu Carrinho</TitleCart>
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
