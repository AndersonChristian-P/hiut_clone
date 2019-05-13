import React, { Component } from "react"
import axios from "axios"
import { Elements, StripeProvider } from "react-stripe-elements"
import { connect } from "react-redux"
import { requestCart, requestTotal } from "./../../redux/cartReducer"
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

  componentDidMount() {
    this.handleGetCart()
    this.handleGetTotal()
    this.handleGetVatAmnt()
  }

  handleGetCart = async () => {
    await this.props.requestCart()
    if (this.props.cart.length > 0) {
      this.setState({
        cart: this.props.cart
      })
    }

    // axios.get("/api/cart")
    //   .then(res => {
    //     this.setState({
    //       cart: res.data
    //     })
    //   })
  }

  handleGetTotal = async () => {
    await this.props.requestTotal()
    if (this.props.total > 0) {
      this.setState({
        total: this.props.total
      })
    }


    // axios.get("/api/total")
    //   .then(res => {
    //     this.setState({
    //       total: +res.data
    //     })
    //   })
  }

  handleGetVatAmnt = () => {
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
      .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVatAmnt())
  }

  handleUpdateClick = () => {
    const { cart, vatAmnt } = this.state
    axios.put("/api/updatecart", { cart, vatAmnt })
      // .then(this.handleGetCart()).then(this.handleGetTotal()).then(this.handleGetVatAmnt())
      .then(window.location.reload())
  }

  render() {

    console.log("THIS IS THE FIRSTNAME", this.props.firstname)

    const { cart, total } = this.state

    const cartContents = cart.map((product, i) => {
      return <div key={i}>
        <img width="100" src={product.img1} alt="#" />

        <span>
          {`${product.prod_title} ${product.size}`}
          <span><strong>£{(product.price).toFixed(2)}</strong></span>
        </span>

        <span>
          <input
            onChange={(event) => this.handleChange(i, event)}
            type="number"
            placeholder={product.quantity}
            value={cart[i].quantity}
            name="quantity"
          />
          <button onClick={(event) => this.handleDelete(i)} >Remove</button>
        </span>

        <span> £{(product.prodSubtotal).toFixed(2)} </span>
      </div>
    })

    const stripePublicKey = "pk_test_tc5CEolppjyFIp0t5eVgjTDf00IrJ7qdYO"
    return (

      <StripeProvider apiKey={stripePublicKey} >
        <Elements>
          <div>

            {total > 0 ?
              < div >
                <h1>This is the Cart page!</h1>
                <div>

                  <div>
                    <span></span>
                    <span><strong>Item</strong></span>
                    <span><strong>Qty</strong></span>
                    <span><strong>Item Total</strong></span>
                  </div>

                  {cartContents}

                  <hr />
                  <div>
                    <div>Sub-total(<i>exc. VAT</i>) = £{(this.state.total).toFixed(2)}</div>
                    <div>VAT (<i>UK only</i>)=£{(this.state.vatAmnt).toFixed(2)}</div>
                    <div><strong>Sub-total</strong> (<i>inc. VAT</i>)=£{(this.state.total + this.state.vatAmnt).toFixed(2)}</div>
                    <div>Free Returns. Free Repairs For Life.</div>
                  </div>
                  <hr />

                  <button onClick={() => this.handleUpdateClick()}>Update Cart</button>

                  <Popup trigger={<button className="button"> Checkout </button>} modal>
                    {close => (
                      <div className="modal">
                        <a className="close" onClick={close} >&times;</a>
                        <div className="header" >
                          <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/owl.png" />
                        </div>
                        <div className="content" >
                          {' '}
                          <CheckoutForm total={this.state.total} vatAmnt={this.state.vatAmnt} firstname={this.props.firstname} lastname={this.props.lastname} />
                        </div>
                        <div className="actions" >
                          {/* <button
                            className="button"
                            onClick={() => {
                              console.log('modal closed ')
                              close()
                            }}
                          >
                            Cancel
                          </button> */}
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

function mapStateToProps(state) {
  const { cart, total } = state.cart
  const { firstname, lastname } = state.auth
  return {
    cart,
    total,
    firstname,
    lastname,
  }
}

export default connect(mapStateToProps, { requestCart, requestTotal })(Cart)



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