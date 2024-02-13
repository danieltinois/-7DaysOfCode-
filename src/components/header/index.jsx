import { Container, ContentUl, ListItem } from "./styles";

import logo from "../../assets/svg/logo.svg";

export function Header() {
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
            <a href="/">Ofertas</a>
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
