// components/Component3.js
import React, { useState } from "react";
import ProductList from "./Product/ProductList";

const Component3 = ({ onShowToast }) => {
  const [seconds, setSeconds] = useState("");
  const [products, setProducts] = useState("");

  const handleInputChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleButtonClick = () => {
    const parsedSeconds = parseInt(seconds, 10);
    if (!isNaN(parsedSeconds) && parsedSeconds > 0) {
      onShowToast(
        `Counting down from ${parsedSeconds} seconds...`,
        "info",
        parsedSeconds * 1000
      );

      // Countdown logic if needed...
      let countdown = parsedSeconds;
      const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown === 0) {
          clearInterval(countdownInterval);

          // API call after countdown
          fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
              // Display the list of products
              onShowToast("API call successful! Displaying products.");
              console.log(data); // Log the products data to the console
              setProducts(data);
            })
            .catch((error) => {
              onShowToast("Error fetching products from API.");
              console.error("Error fetching products:", error);
            });
        }
      }, 1000);
    } else {
      onShowToast("Please enter a valid number of seconds.");
    }
  };

  return (
    <div className="centered">
      <h2>Component 3</h2>
      <form className="form-container">
        <div className="form-group">
          <label className="field-label">Enter Message :</label>
          <input
            className="input-field"
            type="text"
            value={seconds}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group btn-div">
          <button className="stdbtn" type="button" onClick={handleButtonClick}>
            Start Countdown and Fetch Products
          </button>
        </div>
      </form>
      <div>
      {products.length > 0 && <ProductList products={products} />}
      </div>
      
    </div>
  );
};

export default Component3;
