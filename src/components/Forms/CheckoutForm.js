import React, { Component } from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import Swal from "sweetalert2"
import axios from "axios";


class CheckoutForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: this.props.total,
      vatAmnt: this.props.vatAmnt,
      firstname: this.props.firstname,
      lastname: this.props.lastname
      // cartTotal: ((+this.props.total + +this.props.vatAmnt) * 100)
    }
  }

  submit = async (event) => {
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    const { total, vatAmnt } = await this.state
    let cartTotal = ((total + vatAmnt) * 100)

    if (token) {
      let response = await axios.post("/charge", { cartTotal, token: token.id })

      if (response.status === 200) {
        console.log("Purchase Complete!")
        Swal.fire({
          title: "Success!!!",
          text: "Thank you so much for your purchase.",
          type: "success",
          confirmButtonText: "Cool",
        }).then((result) => {
          if (result.value) {
            this.handleClickCoolBtn()
            window.location.reload()
          }
        })
      }
    } else {
      console.log("Error making purchase!")
      Swal.fire({
        title: "Woops! Something went wrong.",
        text: "Please re-enter your payment information.",
        type: "failure",
        confirmButtonText: "OK"
      })
    }
  }

  handleClickCoolBtn = () => {
    axios.post("/api/clearcart")
      .then(console.log("THE CART HAS BEEN CLEARED"))
  }

  render() {

    console.log("THIS IS THE CHECK OUT FORM FIRST NAME", this.state.firstname)

    const { total, vatAmnt } = this.state

    const cartTotal = parseFloat(total).toFixed(2)

    const cartVat = parseFloat(vatAmnt).toFixed(2)

    console.log("THIS IS THE CART TOTAL", cartTotal)


    return (
      <div className="checkout" >
        <div>
          {this.state.firstname ?
            <p>Hi, {`${this.state.firstname} ${this.state.lastname}`}.</p> : <span></span>}
          <p>The amount that will be charged to your card is £{cartTotal}.</p>
          <p>If you live in the UK, an additional charge of £{cartVat} for VAT will be processed.</p>
          <div className="req-info">
            <p>Please fill out the information below to complete your payment.</p>
          </div>
        </div>
        <br />
        <CardElement />
        <button id="payment-btn" onClick={this.submit} >Submit Payment</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)