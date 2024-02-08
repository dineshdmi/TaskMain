import React from 'react';
import './CSS/Product.css'

// Sample product data
const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: '$20.99',
        imageSrc: 'path/to/product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: '$25.49',
        imageSrc: 'path/to/product2.jpg',
    },
    // Add more product objects as needed
];

class ProductList extends React.Component {
    render() {
        return (
            <div>
                <h2>Product List</h2>
                <div className="product-container">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageSrc} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;
