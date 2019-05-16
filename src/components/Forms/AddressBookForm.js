import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { withRouter } from "react-router-dom"

class AddressBookForm extends Component {
  constructor() {
    super()

    this.state = {
      street: "",
      city: "",
      state: "",
      zip: ""
    }
  }

  componentDidMount() {
    if (this.props.authenticated) {

    } else {
      this.props.history.push("/account")
    }
  }

  handleAddressFormSubmit = async (event) => {
    event.preventDefault()
    const { street, city, state, zip } = this.state
    const userId = this.props.user_id
    console.log("THIS IS THE USER ID WHEN SUBMITTING ADDRESS:", userId)
    await axios.post(`/auth/addresses/${userId}`, { street, city, state, zip })
      .then(this.props.history.push("/info"))
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="address-book-hero">

        <div id="address-book">
          <h1>Delivery Address</h1>
          <h2>Please fill out your shipping address information below</h2>

          <form onSubmit={this.handleAddressFormSubmit}>
            <p>Street</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="street"
              className="address-street"
              value={this.state.street}
            />
            <p>City</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="city"
              className="address-city"
              value={this.state.city}
            />
            <p>State (e.g. AK)</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="state"
              className="address-state"
              maxLength="2"
              value={this.state.state}
            />
            <p>Zip</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="zip"
              className="address-zip"
              maxLength="10"
              value={this.state.zip}
            />
            <div>
              <button>Add Address</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { authenticated, user_id } = state.auth
  return {
    authenticated,
    user_id
  }
}

export default connect(mapStateToProps)(withRouter(AddressBookForm))