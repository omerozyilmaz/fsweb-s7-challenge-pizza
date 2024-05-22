import { useEffect, useState } from "react";
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
  const [errorMaterial, setErrorMaterial] = useState(false);
  const [errorDough, setErrorDough] = useState(false);
  let history = useHistory();

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

  useEffect(() => {
    const additionalMaterialsPrice = additionalMaterial.length * 5 * pizzaCount;
    const totalPrice =
      (price.aciPizzaPrice + additionalMaterialsPrice) * pizzaCount;
    setPrice((firstPrice) => ({
      ...firstPrice,
      totalPrice,
      additionalMaterialsPrice,
    }));
    setErrorMaterial(additionalMaterial.length < 4);
    setErrorDough(selectedDough === "");
  }, [additionalMaterial, pizzaCount, price.aciPizzaPrice, selectedDough]);

  const handleSubmit = async () => {
    const data = {
      selectedDough,
      selectedSize,
      additionalMaterial,
      pizzaCount,
      totalPrice: price.totalPrice,
    };

    try {
      const response = await axios
        .post("https://reqres.in/api/pizza", data)
        .then((res) => {
          console.log(res.data);
          history.push({
            //BURAYI DUZENLE
            pathname: "/OrderConfirmation",
            state: { dataId: res.data.id, data },
          });
        });
    } catch (error) {
      console.error("There was an error submitting the order: ", error);
    }
  };

  return (
    <>
      <div className="container topColor">
        <div className="orderFormSecondDiv">
          <div className="">
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
              <a href="/OrderForm" style={{ color: "red", fontWeight: "bold" }}>
                Sipariş Oluştur
              </a>
            </div>
            <div
              style={{
                fontWeight: 800,
                paddingBottom: 50,
                paddingTop: 50,
                fontSize: 22,
              }}
            >
              Position Absolute Acı Pizza
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 900, fontSize: 27 }}>
                {price.aciPizzaPrice}₺
              </div>
              <div>
                4.9 <span style={{ marginLeft: "10px" }}>(200)</span>
              </div>
            </div>
            <div style={{ paddingBottom: 30, paddingTop: 30, fontWeight: 300 }}>
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
      <div className="container  orderFormSecondDiv">
        <div className="selection-section">
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <DoughSelector
            selectedDough={selectedDough}
            setSelectedDough={setSelectedDough}
            errorDough={errorDough}
          />
        </div>
        <AdditionalMaterialsSelector
          materials={materials}
          additionalMaterial={additionalMaterial}
          handleMaterialChange={handleMaterialChange}
          errorMaterial={errorMaterial}
        />
        <OrderSummary
          pizzaCount={pizzaCount}
          handleCountChange={handleCountChange}
          price={price}
          handleSubmit={handleSubmit}
          additionalMaterial={additionalMaterial}
          disabled={errorMaterial || errorDough}
        />
      </div>
    </>
  );
}
