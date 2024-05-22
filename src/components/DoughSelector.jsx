import React from "react";

function DoughSelector(props) {
  const { selectedDough, setSelectedDough, errorDough } = props;
  return (
    <div className="option-group">
      <label className="option-label">
        Hamur Seç <span className="required">*</span>
      </label>
      <select
        style={{ backgroundColor: " #FAF7F2" }}
        value={selectedDough}
        onChange={(e) => setSelectedDough(e.target.value)}
      >
        <option value="">--Hamur Kalınlığı Seç--</option>
        <option value="ince">İnce</option>
        <option value="kalin">Kalın</option>
      </select>
      {errorDough && (
        <div style={{ color: "red" }}>Lütfen bir hamur kalınlığı seçiniz.</div>
      )}
    </div>
  );
}

export default DoughSelector;
