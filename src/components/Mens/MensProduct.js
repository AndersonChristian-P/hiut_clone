import React, { Component } from "react"
import axios from "axios"

class MensProduct extends Component {
  constructor() {
    super()

    this.state = {
      product: [{}],
    }
  }

  componentDidMount() {
    axios.get(`/api/product/men/${this.props.match.params.productId}`)
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
        <h1>This is the Men's Product page.</h1>
        <img src={product[0].img1} alt="#" />
        {/* <img src={product[0].img2} alt="#" />
        <img src={product[0].img3} alt="#" />
        <img src={product[0].img4} alt="#" />
        <img src={product[0].img5} alt="#" />
        <img src={product[0].img6} alt="#" />
        <img src={product[0].img7} alt="#" /> */}

        <button>Add to Cart</button>
      </div>
    )
  }
}

export default MensProduct