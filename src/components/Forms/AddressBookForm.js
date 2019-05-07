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
    await axios.post(`/auth/addresses/${userId}`, { street, city, state, zip })
    this.props.history.push("/info")
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddressFormSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="street"
            placeholder="Street"
            value={this.state.street}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="city"
            placeholder="City"
            value={this.state.city}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="state"
            placeholder="State"
            value={this.state.state} />
          <input
            onChange={this.handleChange}
            type="number"
            name="zip"
            placeholder="Zip Code"
            value={this.state.zip}
          />
          <button>Add Address</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(withRouter(AddressBookForm))