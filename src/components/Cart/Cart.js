import React, { Component } from "react"
import axios from "axios";
import { Link } from "react-router-dom"

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: [{}],
      haveCart: false
    }
  }

  componentDidMount() {
    this.handleGetCart()
  }

  handleGetCart = () => {
    axios.get("/api/cart")
      .then(res => {
        if (res.data !== []) {
          this.setState({
            haveCart: true
          })
        }
        this.setState({
          cart: res.data
        })
      })
  }

  handleChange = (i, event) => {
    let { value } = event.target
    let currentCart = [...this.state.cart]
    currentCart[i].quantity = value
    this.setState({
      cart: currentCart
    })
  }

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

  handleUpdateClick = () => {
    let cart = this.state.cart
    axios.put("/api/updatecart", { cart })
      .then(this.handleGetCart())
  }

  render() {
    const { cart } = this.state

    const cartContents = cart.map((product, i) => {
      return <div key={i}>
        <img width="100" src={product.img1} alt="#" />
        <span>{`${product.prod_title} ${product.size}`}</span>
        <input
          onChange={(event) => this.handleChange(i, event)}
          type="number"
          placeholder={product.quantity}
          value={cart[i].quantity}
          name="quantity"
        />
        <span>{`${product.price}` * `${product.quantity}`}</span>
        <button onClick={(event) => this.handleDelete(i)} >Delete Item</button>
      </div>
    })

    return (
      <div>

        {this.state.haveCart ?
          <div>
            <h1>This is the Cart page!</h1>
            <div>
              {cartContents}

              <button onClick={() => this.handleUpdateClick()}>Update Cart</button>
            </div>
          </div> :

          <div>
            <h1>This is the Cart page!</h1>
            <div>You don't have any items in the cart. Please click here.</div>
          </div>

        }



      </div>
    )
  }
}

export default Cart
