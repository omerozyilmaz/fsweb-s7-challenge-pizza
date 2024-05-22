import React from "react";

function SizeSelector(props) {
  const { selectedSize, setSelectedSize } = props;
  return (
    <div className="option-group">
      <label className="option-label">
        Boyut Seç <span className="required">*</span>
      </label>
      <div className="options">
        {["S", "M", "L"].map((size) => (
          <button
            key={size}
            className={`option ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
