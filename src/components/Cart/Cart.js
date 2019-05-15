import React, { Component } from "react"
import axios from "axios"
import { Elements, StripeProvider } from "react-stripe-elements"
import { connect } from "react-redux"
import { requestCart, requestTotal, requestVat } from "./../../redux/cartReducer"

import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated } from "./../../redux/authReducer"

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
      total: 0,
      vatAmnt: 0
    }
  }

  async componentDidMount() {
    await this.handleGetCart()
    await this.handleGetTotal()
    await this.handleGetVat()

    let res = await axios.get("/auth/session")

    if (!res.data.user) {
      return null;
    }

    if (res.data.user.user_id !== this.props.user_id) {
      const { user } = res.data
      await this.props.updateUserEmail(user.email)
      await this.props.updateUserId(user.user_id)
      await this.props.updateUserFirstName(user.firstname)
      await this.props.updateUserLastName(user.lastname)
      await this.props.updateAuthenticated(user.authenticated)
    }

  }

  handleGetCart = async () => {
    await this.props.requestCart()
    if (this.props.cart.length > 0) {
      this.setState({
        cart: this.props.cart
      })
    }
  }

  handleGetTotal = async () => {
    await this.props.requestTotal()
    if (+this.props.total > 0) {
      this.setState({
        total: +this.props.total
      })
    }
  }

  handleGetVat = async () => {
    await this.props.requestVat()
    if (+this.props.vat > 0) {
      this.setState({
        vat: +this.props.vat
      })
    }


    axios.get("/api/vat")
      .then(res => {
        this.setState({
          vatAmnt: +res.data
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
    const idText = this.state.cart[i].id
    const size = this.state.cart[i].size
    const quantity = this.state.cart[i].quantity
    const price = this.state.cart[i].price

    const endpoint = `/api/deletefromcart/${idText}/${size}/${quantity}/${price}`

    axios.delete(endpoint)
      .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVat())
  }

  handleUpdateClick = () => {
    const { cart, vatAmnt } = this.state
    axios.put("/api/updatecart", { cart, vatAmnt })
      .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVat())
  }

  render() {

    const { cart, total } = this.state

    const cartContents = cart.map((product, i) => {
      return <div className="cart-content" key={i}>
        <img className="cart-content-image" src={product.img1} alt="#" />

        <span className="cart-content-prod-info">
          <span>{`${product.prod_title} ${product.size}`}</span>
          {/* <br /> */}
          <div><strong>£{(product.price).toFixed(2)}</strong></div>
        </span>

        <span className="cart-content-item-count">
          <input
            onChange={(event) => this.handleChange(i, event)}
            type="number"
            placeholder={product.quantity}
            value={cart[i].quantity}
            name="quantity"
          />
          <div className="cart-content-btn">
            <button onClick={(event) => this.handleDelete(i)} >Remove</button>
          </div>
        </span>

        <span className="cart-content-subtotal"> £{(product.prodSubtotal).toFixed(2)} </span>
      </div>
    })

    const stripePublicKey = "pk_test_tc5CEolppjyFIp0t5eVgjTDf00IrJ7qdYO"
    return (

      <StripeProvider apiKey={stripePublicKey} >
        <Elements>

          {total > 0 ?
            <div className="items-in-cart">


              <div className="cart-headings">
                <span className="cart-heading-empty"></span>
                <span className="cart-heading-item"><strong>Item</strong></span>
                <span className="cart-heading-qty"><strong>Qty</strong></span>
                <span className="cart-heading-total"><strong>Item Total</strong></span>
              </div>

              <div className="cart-contents">
                {cartContents}

                <tfoot className="cart-totals">

                  <tr className="cart-subtotal">
                    <td>Sub-total(<i>exc. VAT</i>) = £{(this.state.total).toFixed(2)}</td>
                  </tr>

                  <tr className="cart-vat">
                    <td>VAT (<i>UK only</i>)=£{(this.state.vatAmnt).toFixed(2)}</td>
                  </tr>

                  <tr className="cart-total">
                    <td><strong>Sub-total</strong> (<i>inc. VAT</i>)=£{(this.state.total + this.state.vatAmnt).toFixed(2)}</td>
                  </tr>

                  <tr className="cart-repair">
                    <td>Free Returns. Free Repairs For Life.</td>
                  </tr>


                </tfoot>
              </div>


              {/* <div className="cart-totals">
                <div className="cart-subtotal">Sub-total(<i>exc. VAT</i>) = £{(this.state.total).toFixed(2)}</div>
                <div className="cart-vat">VAT (<i>UK only</i>)=£{(this.state.vatAmnt).toFixed(2)}</div>
                <div className="cart-total"><strong>Sub-total</strong> (<i>inc. VAT</i>)=£{(this.state.total + this.state.vatAmnt).toFixed(2)}</div>
                <div className="cart-repair">Free Returns. Free Repairs For Life.</div>
              </div> */}


              <div className="cart-update-checkout">
                <button className="update-cart-btn" onClick={() => this.handleUpdateClick()}>Update Cart</button>

                <Popup trigger={<button className="checkout-btn"> Checkout </button>} modal>
                  {close => (
                    <div className="modal">
                      <a className="close" onClick={close} >&times;</a>
                      <div className="header" >
                        <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/owl.png" />
                      </div>
                      <div className="content" >
                        {' '}
                        <CheckoutForm total={this.state.total} vatAmnt={this.state.vatAmnt} firstname={this.props.firstname} />
                      </div>
                      <div className="actions" >
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

        </Elements>
      </StripeProvider>
    )
  }
}

function mapStateToProps(state) {
  const { cart, total, vat } = state.cart
  const { firstname, lastname, user_id } = state.auth
  return {
    cart,
    total,
    vat,
    firstname,
    lastname,
    user_id
  }
}

export default connect(mapStateToProps, { requestCart, requestTotal, requestVat, updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated })(Cart)
