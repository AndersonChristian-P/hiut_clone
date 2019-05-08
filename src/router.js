import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import Login from "./components/Forms/Login"
import LoginRegForm from "./components/Forms/LoginRegForm"
import Details from "./components/Details/Details"
import AddressBook from "./components/Forms/AddressBookForm"
import Collections from "./components/Collections/Collections"
import Product from "./components/Product/Product"
import Cart from "./components/Cart/Cart"


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/account" component={() => (
      <Login>
        <LoginRegForm />
      </Login>
    )} />
    <Route path="/info" component={Details} />
    <Route path="/addressbook" component={AddressBook} />
    <Route path="/collections/:sex" component={Collections} />
    <Route path="/product/:sex" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
)


// <Route path="/account" component={LoginRegForm} />