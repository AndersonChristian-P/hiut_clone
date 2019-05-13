import axios from "axios"

const REQUEST_SESSION_CART = "REQUEST_SESSION_CART"
const REQUEST_SESSION_TOTAL = "REQUEST_SESSION_TOTAL"

const initialState = {
  cart: [{}],
  total: 0
}

export /*async*/ function requestCart() {
  let data = /*await*/ axios.get("/api/cart").then(res => res.data)
  return {
    type: REQUEST_SESSION_CART,
    payload: data
  }
}

export /*async*/ function requestTotal() {
  let data = /*await*/ axios.get("/api/total").then(res => res.data)
  return {
    type: REQUEST_SESSION_TOTAL,
    payload: data
  }
}

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case `${REQUEST_SESSION_CART}_FULFILLED`:
      return { ...state, cart: payload }
    case `${REQUEST_SESSION_TOTAL}_FULFILLED`:
      return { ...state, total: payload }
    default:
      return state
  }
}




