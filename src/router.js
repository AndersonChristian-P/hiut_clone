import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home/Home"
import LoginRegForm from "./components/Forms/LoginRegForm"
import Details from "./components/Details/Details"


export default (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/account" component={LoginRegForm} />

    {/* <Route path="/account" component={() => (
    //   <Login>
    //     <LoginRegForm />
    //   </Login>
    // )} /> */}
    <Route path="/info" component={Details} />
  </Switch>
)