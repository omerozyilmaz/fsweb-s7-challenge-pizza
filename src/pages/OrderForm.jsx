import React, { useEffect, useState } from "react";
import axios from "axios";
import SizeSelector from "../components/SizeSelector";
import DoughSelector from "../components/DoughSelector";
import AdditionalMaterialsSelector from "../components/AdditionalMaterialsSelector";
import OrderSummary from "../components/OrderSummary";
import { useHistory } from "react-router-dom";

export default function OrderForm() {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedDough, setSelectedDough] = useState("");
  const [additionalMaterial, setAdditionalMaterial] = useState([]);
  const [pizzaCount, setPizzaCount] = useState(1);
  const [price, setPrice] = useState({
    aciPizzaPrice: 85.5,
    totalPrice: 85.5,
    additionalMaterialsPrice: 0,
  });
  const [errors, setErrors] = useState({
    material: true,
    dough: true,
  });
  const history = useHistory();

  const materials = [
    "Pepperoni",
    "Sosis",
    "Tavuk",
    "Soğan",
    "Domates",
    "Mısır",
    "Sarımsak",
    "Biber",
    "Jalapeno",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  const handleCountChange = (event) => {
    if (event.target.name === "increase") {
      setPizzaCount((prevCount) => prevCount + 1);
    } else if (event.target.name === "decrease") {
      setPizzaCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    }
  };

  const handleMaterialChange = (material) => {
    setAdditionalMaterial((prev) =>
      prev.includes(material)
        ? prev.filter((i) => i !== material)
        : [...prev, material]
    );
  };

  const calculatePrice = () => {
    const additionalMaterialsPrice = additionalMaterial.length * 5 * pizzaCount;
    const totalPrice =
      (price.aciPizzaPrice + additionalMaterialsPrice) * pizzaCount;

    return {
      ...price,
      totalPrice,
      additionalMaterialsPrice,
    };
  };

  useEffect(() => {
    setPrice(calculatePrice());

    setErrors({
      material: additionalMaterial.length < 4,
      dough: selectedDough === "",
    });
  }, [additionalMaterial, pizzaCount, selectedDough]);

  const handleSubmit = async () => {
    if (errors.material || errors.dough) {
      return;
    }

    const data = {
      selectedDough,
      selectedSize,
      additionalMaterial,
      pizzaCount,
      totalPrice: price.totalPrice,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", data);
      console.log("Order Summary:", response.data);

      history.push(
        `/orderConfirmation/${response.data.id}/${
          response.data.createdAt
        }/${selectedDough}/${selectedSize}/${additionalMaterial.join(
          ","
        )}/${pizzaCount}/${price.totalPrice}`
      );
    } catch (error) {
      console.error("Sipariş gönderilirken bir hata oluştu: ", error);
    }
  };

  return (
    <>
      <div className="container topColor">
        <div className="orderFormSecondDiv">
          <div className="pizza-details">
            <img
              id="formBanner"
              src="src/assets/mile2-aseets/pictures/form-banner.png"
              alt="Form Banner"
            />

            <div className="nav-links">
              <a href="/" style={{ color: "black" }}>
                Anasayfa
              </a>
              <span style={{ color: "black" }}> - </span>
              <a href="/orderForm" style={{ color: "red", fontWeight: "bold" }}>
                Sipariş Oluştur
              </a>
            </div>

            <div className="pizza-title">Position Absolute Acı Pizza</div>

            <div className="pizza-price-rating">
              <div className="pizza-price">{price.aciPizzaPrice}₺</div>
              <div className="pizza-rating">
                4.9 <span>(200)</span>
              </div>
            </div>

            <div className="pizza-description">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </div>
          </div>
        </div>
      </div>

      <div className="container orderFormSecondDiv">
        <div className="selection-section">
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <DoughSelector
            selectedDough={selectedDough}
            setSelectedDough={setSelectedDough}
            errorDough={errors.dough}
          />
        </div>

        <AdditionalMaterialsSelector
          materials={materials}
          additionalMaterial={additionalMaterial}
          handleMaterialChange={handleMaterialChange}
          errorMaterial={errors.material}
        />

        <OrderSummary
          pizzaCount={pizzaCount}
          handleCountChange={handleCountChange}
          price={price}
          handleSubmit={handleSubmit}
          additionalMaterial={additionalMaterial}
          disabled={errors.material || errors.dough}
        />
      </div>
    </>
  );
}
