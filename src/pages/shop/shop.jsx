import React from "react";
import styled from "styled-components";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const Container = styled.div`

`;
const Title = styled.h1`
    margin-top: 100px;
    text-align: center;
    font-size: 40px;
`;
const Products = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
`;



export const Shop = () => {
  return (
    <Container className="shop">
      <Title className="shopTitle">
        AZN BUZZIN SHOP
      </Title>

      <Products className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </Products>
    </Container>
  );
};