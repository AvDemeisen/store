import React from "react";
import "./basket.scss"
const items = [1, 2, 3]

const Item = ({ item }) => (
    <div className="item">{item}</div>
)

export default ({ basketOpen }) => (
    <aside className={`basket ${basketOpen ? "is-open" : ""}`}>
        <header className="basket-header">
            <h2 className="basket-header__title">YOUR BASKET</h2>
            {items.length ? null : <span className="basket-header__sub-header">is currently empty</span>}
        </header>
        <section>
            {items.length ? items.map(item => <Item key={item} item={item}></Item>) : null}
        </section>
    </aside>
)