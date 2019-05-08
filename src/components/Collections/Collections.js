import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Mens from "./../Mens/Mens"
import Womens from "./../Womens/Womens"

class Collections extends Component {

  render() {
    return (
      <Switch>
        <Route path="/collections/mens" component={Mens} />
        <Route path="/collections/womens" component={Womens} />
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