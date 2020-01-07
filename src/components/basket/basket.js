import React from "react";
import "./basket.scss"


const Item = ({ item }) => (
    <div className="item">
        <span>{item.name}</span>
        <span>{item.quantity}</span>
    </div>
)

export default ({ cartOpen, cartItems }) => (
    <aside className={`basket ${cartOpen ? "is-open" : ""}`}>
        <header className="basket-header">
            <h2 className="basket-header__title">YOUR BASKET</h2>
            {cartItems.length ? null : <span className="basket-header__sub-header">is currently empty</span>}
        </header>
        <section>
            {cartItems.length ? cartItems.map(item => <Item key={item.id} item={item}></Item>) : null}
        </section>
    </aside>
)