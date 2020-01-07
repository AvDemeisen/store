import React, { useState, createContext, useReducer } from "react"
import Basket from "../basket/basket"
import Navigation from "../navigation/navigation"
import reducer from "../../store/reducers/cartReducers"
import "./layout.scss"

const Context = createContext()
const Provider = Context.Provider

const initialState = { cart: [] }

const products = [
  { id: 1, name: 'product one' },
  { id: 2, name: 'product two' }
]

export default () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      item: product,
    })
  }

  console.log(state.cart)

  return (
    <Provider value={{ cartOpen, setCartOpen }}>
      <div className="container">
        <Basket cartOpen={cartOpen} cartItems={state.cart}></Basket>
        <Navigation cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={state.cart.length}></Navigation>
        <main className="container__main">
          {products.map(product => 
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>)}
        </main>
      </div>
    </Provider>
  )
}
