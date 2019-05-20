import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import MensCollection from "./../Mens/MensCollection"
import WomensCollection from "./../Womens/WomensCollection"
import AllCollection from "./../Pages/AllCollection/AllCollection"

class Collections extends Component {

  render() {
    return (
      <Switch>
        <Route path="/collections/mens" component={MensCollection} />
        <Route path="/collections/womens" component={WomensCollection} />
        <Route path="/collections/all" component={AllCollection} />
      </Switch>
    )
  }
}

export default Collections