import React, { useState } from "react";
import PizzaPrice from "../components/PizzaPrice";

export default function OrderForm() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedDough, setSelectedDough] = useState('');

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
                <h2>Position Absolute Acı Pizza</h2>
                <PizzaPrice />
                <a>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</a>
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
        </div>
        </>

    );
}
