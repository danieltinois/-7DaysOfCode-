import { Container, ContentUl, ListItem } from "./styles";

import logo from "../../assets/svg/logo.svg";

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
            <a href="/">Meu carrinho</a>
          </ListItem>
        </ContentUl>
      </nav>
    </Container>
  );
}
