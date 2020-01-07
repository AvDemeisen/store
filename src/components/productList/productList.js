import React from "react";
import "./productList.scss"

const Product = ({ item }) => (
    <li>
        <span>{item.name}</span>
    </li>
)

export default ({ items }) => (
    <ul>
        {items.map(item => <Product key={item.id} item={item} />)}
    </ul>
)