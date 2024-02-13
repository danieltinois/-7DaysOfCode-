import { Container, SubInformations, TextContent } from "./styles";

import { FaCircle } from "react-icons/fa";
import maskGroup from "../../assets/imgs/mask-group.png";

export function Card() {
  return (
    <Container>
      <img src={maskGroup} alt="mask group" />

      <TextContent>
        <div>
          <span>Como conseguir</span>
          <h1>minha planta</h1>
          <SubInformations>
            <FaCircle color="#FFCB47" size={52} />
            <span>Escolha suas plantas</span>
          </SubInformations>
          <SubInformations>
            <FaCircle color="#FFCB47" size={52} />
            <span>Faça seu pedido</span>
          </SubInformations>
          <SubInformations>
            <FaCircle color="#FFCB47" size={52} />
            <span>Aguarde na sua casa</span>
          </SubInformations>
        </div>
      </TextContent>
    </Container>
  );
}
