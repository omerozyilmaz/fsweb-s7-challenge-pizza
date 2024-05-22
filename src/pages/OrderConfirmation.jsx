import React from "react";
import { useParams } from "react-router-dom";

export default function OrderConfirmation() {
  const {
    id,
    createdAt,
    selectedDough,
    selectedSize,
    additionalMaterial,
    pizzaCount,
    totalPrice,
  } = useParams();

  const additionalMaterialsList = additionalMaterial.split(",");

  return (
    <div className="container">
      <h2>Order Confirmation</h2>
      <p>Order ID: {id}</p>
      <p>Order Created At: {createdAt}</p>
      <p>Selected Dough: {selectedDough}</p>
      <p>Selected Size: {selectedSize}</p>
      <p>Additional Materials: {additionalMaterialsList.join(", ")}</p>
      <p>Pizza Count: {pizzaCount}</p>
      <p>Total Price: {totalPrice}₺</p>
    </div>
  );
}
