import { Container, ContentUl, ListItem } from "./styles";

import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  function handleSrollToOffers(e) {
    e.preventDefault();

    const offersSection = document.getElementById("offers");
    offersSection.scrollIntoView({ behavior: "smooth" });
  }

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
            <Link to="/cart">Meu carrinho</Link>
          </ListItem>
        </ContentUl>
      </nav>
    </Container>
  );
}
