import axios from "axios"
import { sign } from "crypto";

const initialState = {
  cart: [],
  total: 0
}

const REQUEST_SESSION_CART = "REQUEST_SESSION_CART"
const REQUEST_SESSION_TOTAL = "REQUEST_SESSION_TOTAL"

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




