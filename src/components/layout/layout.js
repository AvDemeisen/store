import React, { useState, createContext } from "react";
import Basket from "../basket/basket"
import Navigation from "../navigation/navigation"
import "./layout.scss"

const Context = createContext();
const Provider = Context.Provider;

export default ({ children }) => {
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <Provider value={{ basketOpen, setBasketOpen}}>
      <div className="container">
        <Basket basketOpen={basketOpen}></Basket>
        <Navigation basketOpen={basketOpen} setBasketOpen={setBasketOpen}></Navigation>
        <main className="container__main">
          {children}
        </main>
      </div>
    </Provider>
  )
}