import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      {products.map((product) => (
        <Product key={products.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
