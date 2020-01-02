import React from "react";
import { Link } from 'gatsby'
import "./navigation.scss"

export default ({ basketOpen, setBasketOpen }) => (
  <nav className="navigation">
    <button className="burger" onClick={() => setBasketOpen(basketOpen => !basketOpen)}>
      <div class="burger-box">
        <div className={`burger-inner ${basketOpen ? "is-active" : ""}`}></div>
      </div>
    </button>
    <Link className="navigation__logo" to="/">store</Link>
    <div className="basket-total">1</div>
  </nav>
)
