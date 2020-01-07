import React from "react";
import { Link } from 'gatsby'
import "./navigation.scss"

export default ({ cartOpen, setCartOpen, cartItems }) => (
  <nav className="navigation">
    <Link className="navigation__logo" to="/">store</Link>
    <button className="basket-icon" onClick={() => setCartOpen(cartOpen => !cartOpen)}>
      <span className="basket-icon__handle"></span>
      <span className="basket-icon__quantity">{cartItems}</span>
      </button>
  </nav>
)
