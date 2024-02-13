import { useState } from "react";

import { Card, CardContent, Cards, Container, Title, ImgContent } from "./styles";

import { FaLongArrowAltRight } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";

import productImg1 from "../../assets/products/produto-01.png";
import productImg2 from "../../assets/products/produto-02.png";
import productImg3 from "../../assets/products/produto-03.png";
import productImg4 from "../../assets/products/produto-04.png";
import productImg5 from "../../assets/products/produto-05.png";
import productImg6 from "../../assets/products/produto-06.png";

export function Offers() {
  const [isHovered, setIsHovered] = useState(Array(6).fill(false));

  const productImages = [
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
  ];

  function handleMouseEnter(index) {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  }

  function handleMouseLeave(index) {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  }

  return (
    <Container>
      <Title>
        <span>Conheça nossas</span>
        <h1>ofertas</h1>
      </Title>

      <Cards>
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
            <ImgContent>

            <img
              src={productImages[index % productImages.length]}
              alt={`produto ${index + 1}`}
            />
            </ImgContent>

            <CardContent>
              <h1>Ajuga reptans</h1>
              <span>R$ 20,00</span>

              <button
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                Comprar
                {isHovered[index] ? (
                  <TbShoppingCartPlus />
                ) : (
                  <FaLongArrowAltRight />
                )}
              </button>
            </CardContent>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}
