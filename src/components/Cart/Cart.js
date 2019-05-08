import React, { Component } from "react"
import axios from "axios";

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    axios.get("/api/cart")
      .then(res => {
        this.setState({
          cart: res.data
        })
      })
    console.log(this.state.cart)
  }


  render() {
    return (
      <div>This is the Cart page!</div>
    )
  }
}

export default Cart