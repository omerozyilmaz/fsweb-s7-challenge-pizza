import React from "react";

function OrderSummary(props) {
  const {
    pizzaCount,
    handleCountChange,
    price,
    handleSubmit,
    additionalMaterial,
    disabled,
  } = props;
  return (
    <div className="order-summary">
      <div className="selection-section">
        <div className="order-note yanyana">
          <label className="option-label">Isim Soyisim</label>
          <textarea placeholder="Isim Soyisim giriniz." />
          <label className="option-label">Sipariş Notu</label>
          <textarea placeholder="Siparişe eklemek istediğiniz bir not var mı?" />
        </div>
      </div>
      <hr />
      <div className="selection-section">
        <div className="yanyana">
          <button
            className="yellow buttonScale"
            name="decrease"
            onClick={handleCountChange}
          >
            -
          </button>
          <div className="buttonScale center">{pizzaCount}</div>
          <button
            className="yellow buttonScale"
            name="increase"
            onClick={handleCountChange}
          >
            +
          </button>
        </div>
        <div className="order-total option-group">
          <div className="div-bold">Sipariş Toplamı</div>
          <div className="inline-items">
            <a>Seçimler: </a>
            <a> {price.additionalMaterialsPrice}₺</a>
          </div>
          <div className="inline-items">
            <a className="colorA">Toplam:</a>
            <a>{price.totalPrice}₺</a>
          </div>
          <button disabled={disabled} onClick={handleSubmit}>
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
