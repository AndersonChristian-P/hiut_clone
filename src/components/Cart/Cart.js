import React, { Component } from "react"
import axios from "axios"
import { Elements, StripeProvider } from "react-stripe-elements"
import { connect } from "react-redux"
import { requestCart, requestTotal, requestVat } from "./../../redux/cartReducer"
import { Link } from "react-router-dom"

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

    window.scrollTo(0, 0)

    let res = await axios.get("/auth/session")

    if (res.data.user) {
      const { user } = res.data
      await this.props.updateUserEmail(user.email)
      await this.props.updateUserId(user.user_id)
      await this.props.updateUserFirstName(user.firstname)
      await this.props.updateUserLastName(user.lastname)
      await this.props.updateAuthenticated(user.authenticated)
    }

    if (res.data.cart.length === 0) {
      return null
    } else {
      await this.handleGetCart()
      await this.handleGetTotal()
      await this.handleGetVat()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cart !== prevState.cart) {
      this.setState({
        cart: this.props.cart,
        total: this.props.total,
        vatAmnt: this.props.vat
      })
    }
  }

  handleGetCart = async () => {
    await this.props.requestCart()
    await this.setState({
      cart: this.props.cart
    })
  }

  handleGetTotal = async () => {
    await this.props.requestTotal()
    await this.setState({
      total: +this.props.total
    })
  }

  handleGetVat = async () => {
    await this.props.requestVat()
    await this.setState({
      vatAmnt: +this.props.vat
    })
  }

  handleChange = (i, event) => {
    let { value } = event.target

    if (value < 1) {
      return value = 1
    }
    let currentCart = [...this.state.cart]
    currentCart[i].quantity = value
    this.setState({
      cart: currentCart
    })
  }

  handleDelete = async (prod_title, prod_size) => {
    const index = this.state.cart.findIndex(prod => prod.prod_title === prod_title && prod.size === prod_size)

    const idText = this.state.cart[index].id
    const size = this.state.cart[index].size
    const quantity = this.state.cart[index].quantity
    const price = this.state.cart[index].price

    const endpoint = await `/api/deletefromcart/${idText}/${size}/${quantity}/${price}`

    await axios.delete(endpoint)
      .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVat())
    // .then(window.location.reload())
  }

  handleUpdateClick = () => {
    const { cart, vatAmnt } = this.state
    axios.put("/api/updatecart", { cart, vatAmnt })
      .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVat())
    // .then(window.location.reload())
  }

  render() {
    const { cart, total } = this.state

    const cartContents = cart.map((product, i) => {
      return <div className="cart-content" key={i}>
        <img className="cart-content-image" src={product.img1} alt="mini shopping cart" />

        <span className="cart-content-prod-info">
          <span>{`${product.prod_title} ${product.size}`}</span>
          <div><strong>£{(product.price).toFixed(2)}</strong></div>
        </span>

        <span className="cart-content-item-count">
          <input
            onChange={(event) => this.handleChange(i, event)}
            type="number"
            placeholder={product.quantity}
            value={cart[i].quantity}
            name="quantity"
            min="1"
          />
          <div className="cart-content-btn">
            <button onClick={() => this.handleDelete(product.prod_title, product.size)} >Remove</button>
          </div>
        </span>

        <span className="cart-content-subtotal"> £{(product.prodSubtotal).toFixed(2)} </span>
      </div>
    })

    const stripePublicKey = "pk_test_tc5CEolppjyFIp0t5eVgjTDf00IrJ7qdYO"
    return (

      <StripeProvider apiKey={stripePublicKey} >
        <Elements>
          <div className="cart-hero">
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

                  <div className="cart-totals">

                    <div className="cart-subtotal">
                      <div>Sub-total(<i>exc. VAT</i>) = £{(this.state.total).toFixed(2)}</div>
                    </div>

                    <div className="cart-vat">
                      <div>VAT (<i>UK only</i>)=£{(+this.state.vatAmnt).toFixed(2)}</div>
                    </div>

                    <div className="cart-total">
                      <div><strong>Sub-total</strong> (<i>inc. VAT</i>)=£{(this.state.total + +this.state.vatAmnt).toFixed(2)}</div>
                    </div>

                    <div className="cart-repair">
                      <div>Free Returns. Free Repairs For Life.</div>
                    </div>

                  </div>
                </div>


                <div className="cart-update-checkout">
                  <button className="update-cart-btn" onClick={() => this.handleUpdateClick()}>Update Cart</button>

                  <Popup trigger={<button className="checkout-btn"> Checkout </button>} modal>
                    {close => (
                      <div className="modal">
                        <span className="close" onClick={close} >&times;</span>
                        <div className="header" >
                          <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/owl.png" alt="owl icon" />
                        </div>
                        <div className="content" >
                          {' '}
                          <CheckoutForm
                            total={this.state.total}
                            vatAmnt={this.state.vatAmnt}
                            firstname={this.props.firstname}
                            handleGetCart={this.handleGetCart}
                            handleGetTotal={this.handleGetTotal}
                            handleGetVat={this.handleGetVat}
                          />
                        </div>
                        <div className="actions" >
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>

              </div> :

              <div className="empty-cart">
                <h1>Your Cart is empty...</h1>
                <p>That's okay,
                  <Link className="link-to-all" to="/collections/all"> head over here & check out our stuff >></Link>
                </p>
              </div>
            }

            <div className="cart-info">

              <div className="cart-info-left">
                <div className="cart-info-left-primary">
                  <h3>Good to know</h3>
                  <p>The Hiut Denim Co. is here to make the best jeans we can, not the most jeans we can. We believe in quality and the skill of the maker. And we believe in ideas and the people who have them. They move this world forward. We just want to make jeans for them.</p>
                </div>

                <div className="cart-info-left-seconday">
                  <h3>Free Returns</h3>
                  <p>We make returns super easy. No dumb rules. No small print. Because unless you are happy, you will never try us again. So just use the Freepost sticker (UK only) that comes with each invoice and send them back to us for a quick refund.<br />
                    <Link className="link-to-faq" to="/faq">Read more »</Link>
                  </p>
                </div>
              </div>


              <div className="cart-info-right">
                <div className="cart-info-right-primary">
                  <h3>Fast Delivery</h3>
                  <p>Your order will be shipped within 48 hours when in stock. All UK orders are shipped using Royal Mail Tracked so you can track them as they leave us. For International orders we use the Royal Mail’s Airmail service. Again, you can track them along the way.</p>
                </div>

                <div className="cart-info-right-secondary">
                  <h3>Free Repairs For Life</h3>
                  <p>We stand by everything we make. And we keep standing by them. Our jeans aren’t indestructible, they are made of cotton after all. But, if they ever fail you and can be repaired, we will do that free of charge. So your favourites keep going.<br />
                    <Link className="link-to-faq" to="/faq">Read more »</Link></p>
                </div>
              </div>

            </div>


          </div>
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
