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
import CheckoutForm from "./components/Forms/CheckoutForm";

import CustomerService from "./components/Pages/CustomerService/CustomerService"
import FAQ from "./components/Pages/FAQ/FAQ"
import FitGuide from "./components/Pages/FitGuide/FitGuide"
import HowToWash from "./components/Pages/HowToWash/HowToWash"
import Documentary from "./components/Pages/Documentary/Documentary"
import Repairs from "./components/Pages/Repairs/Repairs"
import StoreLocations from "./components/Pages/StoreLocations/StoreLocations"
import TermsAndConditions from "./components/Pages/TermsAndConditions/TermsAndConditions"


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/account" component={() => (
      <Login>
        <LoginRegForm />
      </Login>
    )} />
    <Route path="/info" component={Details} />
    <Route path="/address-book" component={AddressBook} />
    <Route path="/collections/:sex" component={Collections} />
    <Route path="/product/:sex" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={CheckoutForm} />
    <Route path="/customer-service" component={CustomerService} />
    <Route path="/faq" component={FAQ} />
    <Route path="/fit-guide" component={FitGuide} />
    <Route path="/how-to-wash" component={HowToWash} />
    <Route path="/documentary" component={Documentary} />
    <Route path="/repairs" component={Repairs} />
    <Route path="/store-locations" component={StoreLocations} />
    <Route path="/terms-and-conditions" component={TermsAndConditions} />
  </Switch>
)