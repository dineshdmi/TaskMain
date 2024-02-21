import React, { useState } from "react";

const Component2 = ({ onShowToast }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue) {
      onShowToast(inputValue);
    } else {
      onShowToast("Please enter a message.","error");
    }
  };

  return (
    <div className="centered-container">
      <h2>Component 2</h2>
      <form className="form-container">
        <div className="form-group">
          <label className="field-label">Enter Message :</label>
          <input
            className="input-field"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group btn-div">
          <button className="stdbtn" type="button" onClick={handleButtonClick}>
            Show Toast
          </button>
        </div>
      </form>
    </div>
  );
};

export default Component2;
