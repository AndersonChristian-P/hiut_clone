import React, { Component } from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import { withRouter } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios";


class CheckoutForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: this.props.total
    }
  }

  submit = async (event) => {
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    })
    if (response.ok) {
      console.log("Purchase Complete!")
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your purchase',
        type: 'success',
        // showConfirmButton: false,
        // timer: 3000,
        confirmButtonText: 'Cool',
        // onAfterClose: this.handleClickCoolBtn()
        // link the button to the cart page
      }).then((result) => {
        if (result.value) {
          this.handleClickCoolBtn()
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
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit} >Submit Payment</button>
      </div>
    )
  }
}

export default withRouter(injectStripe(CheckoutForm))