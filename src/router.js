import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import Login from "./components/Forms/Login"
import LoginRegForm from "./components/Forms/LoginRegForm"
import Details from "./components/Details/Details"
import AddressBook from "./components/Forms/AddressBookForm"
import Collections from "./components/Collections/Collections"


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
  </Switch>
)


// <Route path="/account" component={LoginRegForm} />