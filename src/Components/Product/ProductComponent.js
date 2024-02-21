// ProductComponent.js
import React from 'react';

const ProductComponent = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-category">{category}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div className="product-rating">
          <span className="rating">Rating: {rating.rate}</span>
          <span className="rating-count">({rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
