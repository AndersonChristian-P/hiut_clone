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
    console.log(token.id)
    console.log(cartTotal)

    let response = await axios.post("/charge", { cartTotal, token: token.id })

    if (response.status === 200) {
      console.log("Purchase Complete!")
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your purchase',
        type: 'success',
        confirmButtonText: 'Cool',
      }).then((result) => {
        if (result.value) {
          this.handleClickCoolBtn()
          window.location.reload()
        }
      })
    }
  }

  handleClickCoolBtn = () => {
    console.log("THE CLICK COOL BTN WAS CLICKED!!!!")
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