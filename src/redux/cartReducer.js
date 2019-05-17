import axios from "axios"

const REQUEST_SESSION_CART = "REQUEST_SESSION_CART"
const REQUEST_SESSION_TOTAL = "REQUEST_SESSION_TOTAL"
const REQUEST_SESSION_VAT = "REQUEST_SESSION_VAT"

const initialState = {
  cart: [],
  total: "",
  vat: ""
}

export function requestCart() {
  let data = axios.get("/api/cart").then(res => res.data)
  return {
    type: REQUEST_SESSION_CART,
    payload: data
  }
}

export function requestTotal() {
  let data = axios.get("/api/total").then(res => res.data)
  return {
    type: REQUEST_SESSION_TOTAL,
    payload: data
  }
}

export function requestVat() {
  let data = axios.get("/api/vat").then(res => res.data)
  return {
    type: REQUEST_SESSION_VAT,
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
    case `${REQUEST_SESSION_VAT}_FULFILLED`:
      return { ...state, vat: payload }
    default:
      return state
  }
}




