import { useState } from "react";

export default function PizzaPrice(props) {
    const [price, setPrice] = useState({
        aciPizzaPrice: 85.50
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{fontWeight:900, fontSize:27}}>{price.aciPizzaPrice}₺</div>
             <div>
                 4.9 <span style={{ marginLeft: '10px' }}>(200)</span>
            </div>
        </div>
)
}
