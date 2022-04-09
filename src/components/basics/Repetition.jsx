import React from "react";
import Products from '../../data/Products';

export default (props) => {

    function getProductsList() {
        return Products.map(prod => {
            return <li>{prod.id} - {prod.productName} - US$ {prod.price}</li>;
        })
    }

    return (
        <div>
            <h2>Repetition</h2>
            <ul>
                {getProductsList()}
            </ul>
        </div>
    );
}