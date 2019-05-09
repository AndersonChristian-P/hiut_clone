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
    this.handleGetCart()
  }

  handleGetCart = () => {
    axios.get("/api/cart")
      .then(res => {
        this.setState({
          cart: res.data
        })
      })
  }

  // handleQtyChange = (event) => {
  //   const { name, value } = this.event
  //   this.setState({
  //     [name]: value
  //   })
  // }

  handleDelete = (i) => {
    console.log("I AM FIRING DELETE!")
    const idText = this.state.cart[i].id
    const size = this.state.cart[i].size
    const quantity = this.state.cart[i].quantity
    const price = this.state.cart[i].price

    const endpoint = `/api/deletefromcart/${idText}/${size}/${quantity}/${price}`

    axios.delete(endpoint)
      .then(this.handleGetCart())
  }

  render() {
    const { cart } = this.state

    console.log("---THIS IS THE CART ARRAY---", cart)

    const cartContents = cart.map((product, i) => {
      return <div key={i}>
        <img width="100" src={product.img1} alt="#" />
        <span>{`${product.prod_title} ${product.size}`}</span>
        <input
          // onChange={this.handleQtyChange}
          // type="number"
          placeholder={product.quantity}
        // value={cart[i].quantity}
        // name="quantity"
        />
        <span>{`${product.price}` * `${product.quantity}`}</span>
        <button onClick={(e) => this.handleDelete(i)} >Delete Item</button>
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
