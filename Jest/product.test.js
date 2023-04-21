// This in package.json:

//  "name": "jestlesson",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "jest"



import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShopContext } from '../../context/ShopContext';
import { Product } from './Product';

describe('Product', () => {
  const data = {
    id: 1,
    productName: 'Test Product',
    price: 10,
    productImage: 'test-image.jpg',
  };
  const addToCart = jest.fn();
  const cartItems = { 1: 2 };

  it('renders product details', () => {
    const { getByText, getByAltText } = render(
      <Product data={data} />,
    );
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByAltText('Soju')).toBeInTheDocument();
  });

  it('adds product to cart when button is clicked', () => {
    const { getByText } = render(
      <ShopContext.Provider value={{ addToCart, cartItems }}>
        <Product data={data} />
      </ShopContext.Provider>,
    );
    const addButton = getByText('Add To Cart');
    fireEvent.click(addButton);
    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(1);
  });

  it('displays cart item count if product is in cart', () => {
    const { getByText } = render(
      <ShopContext.Provider value={{ addToCart, cartItems }}>
        <Product data={data} />
      </ShopContext.Provider>,
    );
    expect(getByText('(2)')).toBeInTheDocument();
  });
});