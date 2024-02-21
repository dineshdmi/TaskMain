// ProductList.js
import React, { useState } from 'react';
import ProductComponent from './ProductComponent';
import '../CSS/ProductComponent.css';

const ProductList = ({ products }) => {
  const productsPerPage = 4; // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div style={{padding:'40px'}}>
      <h2>Product List</h2>
      {currentProducts.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          {'<'}
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'selected-page' : ''}
          >
            {number}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
