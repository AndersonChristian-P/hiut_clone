import React, { Component } from "react"
import axios from "axios"
import { Elements, StripeProvider } from "react-stripe-elements"
import Popup from "reactjs-popup"
import CheckoutForm from "./../Forms/CheckoutForm"

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cart: [{
        id: "",
        size: "",
        quantity: 0,
        img1: "",
        prod_title: "",
        prodSubtotal: 0,
        price: 0
      }],
      total: 0
    }
  }

  componentDidMount() {
    this.handleGetCart()
    this.handleGetTotal()
  }

  handleGetCart = () => {
    axios.get("/api/cart")
      .then(res => {
        this.setState({
          cart: res.data
        })
      })
  }

  handleGetTotal = () => {
    axios.get("/api/total")
      .then(res => {
        this.setState({
          total: +res.data
        })
      })
  }

  handleChange = (i, event) => {
    let { value } = event.target
    let currentCart = [...this.state.cart]
    currentCart[i].quantity = value
    currentCart[i].prodSubtotal = +currentCart[i].quantity * +currentCart[i].price
    this.setState({
      cart: currentCart
    })
  }

  handleDelete = (i) => {
    const idText = this.state.cart[i].id
    const size = this.state.cart[i].size
    const quantity = this.state.cart[i].quantity
    const price = this.state.cart[i].price

    const endpoint = `/api/deletefromcart/${idText}/${size}/${quantity}/${price}`

    axios.delete(endpoint)
      .then(this.handleGetCart()).then(this.handleGetTotal())
  }

  handleUpdateClick = () => {
    let cart = this.state.cart
    axios.put("/api/updatecart", { cart })
      .then(this.handleGetCart()).then(this.handleGetTotal())
  }

  render() {
    const { cart } = this.state

    console.log(this.state.total)

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
        <span>{product.prodSubtotal}</span>
        <button onClick={(event) => this.handleDelete(i)} >Delete Item</button>
      </div>
    })

    const stripePublicKey = "pk_test_tc5CEolppjyFIp0t5eVgjTDf00IrJ7qdYO"
    return (

      <StripeProvider apiKey={stripePublicKey} >
        <Elements>
          <div>

            {cart[0] ?
              <div>
                <h1>This is the Cart page!</h1>
                <div>
                  {cartContents}
                  <button onClick={() => this.handleUpdateClick()}>Update Cart</button>
                  <div>Total: {this.state.total}</div>

                  <Popup trigger={<button className="button"> Checkout </button>} modal>
                    {close => (
                      <div className="modal">
                        <a className="close" onClick={close} >&times;</a>
                        <div className="header" > Checkout </div>
                        <div className="content" >
                          {' '}
                          <CheckoutForm total={this.state.total} />
                        </div>
                        <div className="actions" >
                          <button
                            className="button"
                            onClick={() => {
                              console.log('modal closed ')
                              close()
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>

                </div>
              </div> :

              <div>
                <h1>This is the Cart page!</h1>
                <div>You don't have any items in the cart. Please click here.</div>
              </div>
            }
          </div>
        </Elements>
      </StripeProvider>


    )
  }
}

export default Cart



//  <Link to="/checkout">
// <button>Checkout</button>
// </Link>



/* <Popup
  trigger={<button className="cart-checkout-btn" >Checkout</button>}
  position="top center"
>
  <div >
    <h1>Popup content here!!!</h1>
    <CheckoutForm />
  </div>
</Popup> */