import React from "react";

function AdditionalMaterialsSelector(props) {
  const { materials, additionalMaterial, handleMaterialChange, errorMaterial } =
    props;
  const handleKeyDown = (event, material) => {
    if (event.key === "Enter") {
      handleMaterialChange(material);
    }
  };
  return (
    <div className="additional-material-section">
      <label className="option-label">Ek Malzemeler</label>
      <div style={{ paddingTop: 20 }}>
        En Fazla 10 Malzeme Seçebiliriniz. 5₺
      </div>
      <div className="additional-material-option">
        {materials.map((material) => (
          <label
            key={material}
            className="checkbox"
            tabIndex="0"
            onKeyDown={(event) => handleKeyDown(event, material)}
          >
            <input
              type="checkbox"
              value={material}
              checked={additionalMaterial.includes(material)}
              onChange={() => handleMaterialChange(material)}
            />
            <span className="checkmark"></span>
            {material}
          </label>
        ))}
      </div>
      {errorMaterial && (
        <div style={{ color: "red" }}>
          Lütfen en az 4 tane ek malzeme seçiniz.
        </div>
      )}
    </div>
  );
}

export default AdditionalMaterialsSelector;
