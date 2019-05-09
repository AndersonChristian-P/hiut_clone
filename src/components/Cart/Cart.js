import React, { Component } from "react"
import axios from "axios";

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: [{}]
    }
  }

  componentDidMount() {
    axios.get("/api/cart")
      .then(res => {
        console.log(res.data)
        this.setState({
          cart: res.data
        })
      })
  }

  render() {
    const { cart } = this.state

    const cartContents = cart.map((product, i) => {
      return <div key={i}>
        <img width="100" src={product.img1} alt="#" />
        <span>{`${product.prod_title} ${product.size}`}</span>
        <input type="number" placeholder={product.quantity} />
        <span>{`${product.price}` * `${product.quantity}`}</span>
      </div>
    })

    return (
      <div>
        <h1>This is the Cart page!</h1>
        <div>
          {cartContents}
        </div>
      </div>
    )
  }
}

export default Cart


// important questions | How do you get everything to re-render? | If I add different sizes of the same product to the cart I don't have the code to differentiate between sizes, so the cart doesn't save the different sizes just the most recent one added, however the cart quantity is updated