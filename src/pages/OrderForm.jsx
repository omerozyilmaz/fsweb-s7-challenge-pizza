import { useEffect, useState } from "react";
import axios from "axios";

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
  }, [additionalMaterial, pizzaCount, price.aciPizzaPrice]);

  const handleSubmit = async () => {
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
            <div style={{ paddingBottom: 30, paddingTop: 30 }}>
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
          <div className="option-group">
            <label className="option-label">
              Boyut Seç <span className="required">*</span>
            </label>
            <div className="options">
              <button
                className={`option ${selectedSize === "S" ? "selected" : ""}`}
                onClick={() => setSelectedSize("S")}
              >
                S
              </button>
              <button
                className={`option ${selectedSize === "M" ? "selected" : ""}`}
                onClick={() => setSelectedSize("M")}
              >
                M
              </button>
              <button
                className={`option ${selectedSize === "L" ? "selected" : ""}`}
                onClick={() => setSelectedSize("L")}
              >
                L
              </button>
            </div>
          </div>
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
          </div>
        </div>
        <div className="additional-material-section">
          <label className="option-label">Ek Malzemeler</label>
          <div style={{ paddingTop: 20 }}>
            En Fazla 10 Malzeme Seçebiliriniz. 5₺
          </div>
          <div className="additional-material-option">
            {materials.map((material) => (
              <label key={material} className="checkbox ">
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
        <div className="order-summary ">
          <div className="selection-section">
            <div className="order-note yanyana">
              <label className="option-label ">Isim Soyisim</label>
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
              <button
                disabled={additionalMaterial.length < 4}
                onClick={handleSubmit}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
