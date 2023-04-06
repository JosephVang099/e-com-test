import React from "react";
import Filter from "../../components/Filter";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import "./shop.css";



export const Shop = () => {
  return (
    <div>
    <Filter />
    <div className="shop">
        <div className="products">
        {PRODUCTS.map((product) => (
            <Product data={product} />
        ))}
        </div>
  </div>
  </div>
);
};