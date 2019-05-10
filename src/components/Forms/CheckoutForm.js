import React, { Component } from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import Swal from "sweetalert2"
import axios from "axios";


class CheckoutForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartTotal: (+this.props.total * 100)
    }
  }

  submit = async (event) => {
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    let { cartTotal } = await this.state

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
    return (
      <div className="checkout" >
        <p>Please fill out the information below to complete your payment.</p>
        <CardElement />
        <button onClick={this.submit} >Submit Payment</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)