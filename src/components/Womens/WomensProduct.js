import React, { Component } from "react"
import axios from "axios"

class WomensProduct extends Component {
  constructor() {
    super()

    this.state = {
      product: [{}]
    }
  }

  componentDidMount() {
    axios.get(`/api/product/women/${this.props.match.params.productId}`)
      .then(res => {
        this.setState({
          product: res.data
        })
      })
  }

  render() {
    const { product } = this.state

    return (
      <div>
        <h1>This is the Women's Product page.</h1>
        <img src={product[0].img1} alt="#" />

        <button>Add to Cart</button>
      </div>
    )
  }
}

export default WomensProduct