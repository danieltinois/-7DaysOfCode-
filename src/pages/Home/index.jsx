import { Header } from "../../components/header";
import { InputButton } from "../../components/inputButton";
import { Vector } from "../../components/vector";
import {
  Container,
  Content,
  ContentWrapper,
  Information,
  Text,
} from "./styles";

import { IoMailOutline } from "react-icons/io5";
import imageHero from "../../assets/imgs/image-hero.png";
import { Card } from "../../components/card";
import { Offers } from "../../components/offers";

export function Home() {
  return (
    <Container>
      <div>
        <Header />
      </div>

      <Vector />

      <ContentWrapper>
        <Content>
          <Information>
            <div>
              <span>Sua casa com as</span>
              <h1>melhores plantas</h1>
              <Text>
                Encontre aqui uma vasta seleção de plantas para decorar a sua
                casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre
                com seu e-mail e assine nossa newsletter para saber das
                novidades da marca.
              </Text>
            </div>
            <InputButton
              icon={IoMailOutline}
              placeholder="Insira seu e-mail"
              title="Assinar newsletter"
            />
          </Information>
          <img src={imageHero} alt="Imagem de uma arvore" />
        </Content>
      </ContentWrapper>

      <Card />

      <Offers />
    </Container>
  );
}
