import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import authReducer from "./authReducer"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store