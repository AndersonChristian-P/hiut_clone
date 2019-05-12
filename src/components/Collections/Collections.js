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




      // {this.state.sex === "mens" ?

      //   <h1>This is the Mens Collection page.</h1> :
      //   <h1>This is the Womens Collection page.</h1>
      // }

      // componentDidMount() {
      //   const { sex } = this.props.match.params
      //   if (sex === "mens") {
      //     axios.get(`/api/collections/${sex}`)
      //       .then(res => {
      //         this.setState({
      //           products: res.data,
      //           sex: sex
      //         })
      //       })
      //   } else if (sex === "womens") {
      //     axios.get(`/api/collections/${sex}`)
      //       .then(res => {
      //         this.setState({
      //           products: res.data,
      //           sex: sex
      //         })
      //       })
      //   }
      // }