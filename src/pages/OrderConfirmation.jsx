import React from "react";
import { useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const location = useLocation();
  const { id, createdAt, form, fiyat } = location.state || {};

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Order Confirmation</h2>
      <p>Order ID: {id}</p>
      <p>Order Created At: {createdAt}</p>
      <p>Selected Dough: {form.selectedDough}</p>
      <p>Selected Size: {form.selectedSize}</p>
      <p>Additional Materials: {form.additionalMaterial.join(", ")}</p>
      <p>Pizza Count: {form.pizzaCount}</p>
      <p>Total Price: {fiyat}₺</p>
    </div>
  );
}
