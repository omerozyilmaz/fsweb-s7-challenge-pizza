import { useState } from "react";

export default function PizzaPrice(props) {
    const [price, setPrice] = useState({
        aciPizzaPrice: 85.50
    });

    return (
        <nav >
            <ul className="hight-price-nav-List-a">
                <li>{price.aciPizzaPrice}</li>
                <ul className="hight-price-nav-List-b">
                <li><a>4.9</a></li>
                <li><a>"(200)"</a></li>
                </ul>
            </ul>
        </nav>
)
}
