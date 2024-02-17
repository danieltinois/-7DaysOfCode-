import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

import { Container, ContentUl, ListItem, CartItemCount } from "./styles";

import logo from "../../assets/svg/logo.svg";

export function Header() {
  const { productsCart } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  function handleSrollToOffers(e) {
    e.preventDefault();

    const offersSection = document.getElementById("offers");
    offersSection.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    // Atualizar o número de itens quando os itens do carrinho mudarem
    setItemCount(productsCart.length);
  }, [productsCart]);

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Casa Verde" />
      </div>

      <nav>
        <ContentUl>
          <ListItem>
            <a href="/">Como fazer</a>
          </ListItem>
          <ListItem>
            <a href="/" onClick={handleSrollToOffers}>
              Nossas plantas
            </a>
          </ListItem>
          <ListItem>
            <a href="/">Depoimentos</a>
          </ListItem>
          <ListItem>
            <a href="/">Vídeos</a>
          </ListItem>
          <ListItem>
            <Link to="/cart">
              Meu carrinho
              {itemCount > 0 && <CartItemCount>{itemCount}</CartItemCount>}
            </Link>
          </ListItem>
        </ContentUl>
      </nav>
    </Container>
  );
}
