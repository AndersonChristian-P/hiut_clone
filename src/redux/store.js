import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import authReducer from "./authReducer"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware))

const store = createStore(rootReducer, enhancer)

export default store