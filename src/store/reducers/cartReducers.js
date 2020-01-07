export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = action.item
      let existed_item = state.cart.find(item => action.item.id === item.id)
      if (existed_item) {
        addedItem.quantity += 1
        return {
          ...state
        }
      }
      else {
        addedItem.quantity = 1;
        return {
         ...state,
         cart: [...state.cart, addedItem],
        }
      }
    default:
      return state
  }
}

