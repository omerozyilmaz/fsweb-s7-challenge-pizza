import React, { useState } from "react";
import PizzaPrice from "../components/PizzaPrice";

export default function OrderForm() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedDough, setSelectedDough] = useState('');
    const [additionalMaterial, setAdditionalMaterial] =useState([]);
    const materials = ["Pepperoni", "Sosis", "Tavuk", "Soğan", "Domates", "Mısır", "Sarımsak", "Biber", "Jalapeno", "Sucuk", "Ananas", "Kabak"];

    const handleMaterialChange = (material) =>{

        setAdditionalMaterial(prev => prev.includes(material) ? prev.filter(i => !material): [...prev, material]);
    };

    return (
        <>
        <div className="container topColor">
            <div className="orderFormSecondDiv">
                <div className="">
                    <img id="formBanner" src="src/assets/mile2-aseets/pictures/form-banner.png" alt="Form Banner"/>
                    <div className='nav-links'>
                        <a href="/" style={{ color: 'black' }}>Anasayfa</a>
                        <span style={{ color: 'black' }}> - </span>
                        <a href="/OrderForm" style={{ color: 'red', fontWeight: "bold" }}>Sipariş Oluştur</a>
                    </div>
                <div style={{fontWeight:800, paddingBottom:50, paddingTop:50, fontSize:22}}>Position Absolute Acı Pizza</div>
                <PizzaPrice />
                <div style={{paddingBottom:30, paddingTop:30}}>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</div>
                </div>
                </div>
        </div>
        <div className="container orderFormSecondDiv">
                <div className="selection-section">
                    <div className="option-group">
                        <label className="option-label">Boyut Seç <span className="required">*</span></label>
                        <div className="options">
                            <button className={`option ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => setSelectedSize('S')}>S</button>
                            <button className={`option ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => setSelectedSize('M')}>M</button>
                            <button className={`option ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => setSelectedSize('L')}>L</button>
                        </div>
                    </div>
                    <div className="option-group">
                        <label className="option-label">Hamur Seç <span className="required">*</span></label>
                        <select style={{backgroundColor:' #FAF7F2'}} value={selectedDough} onChange={(e) => setSelectedDough(e.target.value)}>
                            <option value="">--Hamur Kalınlığı Seç--</option>
                            <option value="thin">İnce</option>
                            <option value="thick">Kalın</option>
                        </select>
                    </div>
                </div>
                <div className="additional-material-section">
                    <label className="option-label">Ek Malzemeler</label>
                    <div style={{paddingTop:20}}>En Fazla 10 Malzeme Seçebiliriniz. 5₺</div>
                    <div className="additional-material-option">
                        {materials.map(material => (
                            <label key={material} className="additional-material-option">
                                <input
                                type="checkbox"
                                value={material}
                                checked = {additionalMaterial.includes(material)}
                                onChange={()=> handleMaterialChange(material)}    
                                />
                                {material}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="order-summary">
                    <div className="order-note">
                        <label>Sipariş Notu</label>
                        <textarea placeholder="Siparişe eklemek istediğiniz bir not var mı?" />
                    </div>
                    <div className="order-total">
                        <div>Seçimler: 25.00₺</div>
                        <div>Toplam: 110.50₺</div>
                        <button>SİPARİŞ VER</button>
                    </div>
                </div>
            </div>
        </>
    );
}
