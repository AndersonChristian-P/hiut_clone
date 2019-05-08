import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import MensProduct from "./../Mens/MensProduct"
import WomensProduct from "../Womens/WomensProduct";

class Product extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <Switch>
        <Route path="/product/men/:productId" component={MensProduct} />
        <Route path="/product/women/:productId" component={WomensProduct} />
      </Switch>
    )
  }
}

export default Product