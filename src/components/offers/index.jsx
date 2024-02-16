//Completo

import { useState, useEffect, useContext } from "react";

import { CartContext } from "../../context/cart";

import {
  Card,
  CardContent,
  Cards,
  Container,
  Title,
  ImgContent,
  Options,
  SelectStyle,
  InputCheck,
  DivInputChecked,
} from "./styles";

import { api } from "../../services/api";

import { FaLongArrowAltRight } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";

import productImg1 from "../../assets/products/produto-01.png";
import productImg2 from "../../assets/products/produto-02.png";
import productImg3 from "../../assets/products/produto-03.png";
import productImg4 from "../../assets/products/produto-04.png";
import productImg5 from "../../assets/products/produto-05.png";
import productImg6 from "../../assets/products/produto-06.png";

export function Offers() {
  const [isHovered, setIsHovered] = useState(Array(12).fill(false));
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [removeOutOfStock, setRemoveOutOfStock] = useState(false);

  const { addProductToCart } = useContext(CartContext);

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

  function handleSortChange(event) {
    setSortOrder(event.target.value);

    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.preco - b.preco;
      } else {
        return b.preco - a.preco;
      }
    });

    setProducts(sortedProducts);
  }

  function handleAddToCart(product, index) {
    addProductToCart(product);
    const updatedProduct = { ...product, img: product.img }; // Inclui a propriedade img ao produto
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  }

  function handleCheckboxChange(event) {
    setRemoveOutOfStock(event.target.checked);
  }

  const filteredProducts = removeOutOfStock
    ? products.filter((product) => product.ordem !== 0)
    : products;

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        const data = response.data.map((prod) => ({
          ...prod,
          img: productImages[Math.floor(Math.random() * productImages.length)], // Atribui uma imagem aleatória ao produto
        }));
        const repeatProducts = [...data];
        while (repeatProducts.length < 12) {
          repeatProducts.push(...data);
        }
        setProducts(repeatProducts.slice(0, 12));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container id="offers">
      <Title>
        <span>Conheça nossas</span>
        <h1>Plantas</h1>
      </Title>

      <Options>
        <SelectStyle value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Preço crescente</option>
          <option value="desc">Preço decrescente</option>
        </SelectStyle>

        <DivInputChecked>
          <span>Remover produtos fora de estoque:</span>
          <InputCheck
            type="checkbox"
            checked={removeOutOfStock}
            onChange={handleCheckboxChange}
          />
        </DivInputChecked>
      </Options>

      <Cards>
        {filteredProducts.map((product, index) => (
          <Card key={index} blur={product.ordem === 0 ? "true" : "false"}>
            <ImgContent>
              <img src={product.img} alt={`produto ${index + 1}`} />{" "}
              {/* Utiliza a imagem do produto */}
            </ImgContent>

            <CardContent>
              <h1>{product.name}</h1>
              <span>R$ {product.preco}</span>

              {product.ordem === 0 ? (
                <span className="out-of-stock">Fora de estoque</span>
              ) : (
                <button
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => handleAddToCart(product, index)}
                  disabled={product.ordem === 0}
                >
                  Comprar
                  {isHovered[index] ? (
                    <TbShoppingCartPlus />
                  ) : (
                    <FaLongArrowAltRight />
                  )}
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}
