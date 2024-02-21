import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const handleApplyClick = () => {
    window.location.href = '/register-page';
  };
  const { id, name, description, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        
              <Link to={`/apply/${product.id}`}></Link>
              <button onClick={handleApplyClick}>Register</button>
          
      </div>
    </div>
  );
};

export default Product;
