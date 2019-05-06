import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

class Details extends Component {

  constructor() {
    super()

    this.state = {
      street: "",
      city: "",
      state: "",
      zip: null,
      haveAddress: false
    }
  }

  componentDidMount() {
    if (this.props.authenticated) {
      axios.get("/auth/addresses")
        .then(res => {
          if (res.data) {
            this.setState({
              street: res.data.street,
              city: res.data.city,
              state: res.data.state,
              zip: res.data.zip,
              haveAddress: true
            })
          }
        })
    } else {
      this.props.history.push("/account")
    }
  }

  render() {
    return (
      <div>
        <h1>This is the User info</h1>
        <h2>{`Hi ${this.props.firstname} ${this.props.lastname}`}</h2>

        {this.state.haveAddress ?

          <div>
            <h2>Your shipping address on file is...</h2>
            <h3>{this.state.street}</h3>
            <h3>{`${this.state.city}, ${this.state.state}, ${this.state.zip}`}</h3>
          </div> :

          <div>
            <h2>You do not have a shipping address on file.</h2>
            <Link to="/addressbook">
              <button>Add Address</button>
            </Link>
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(withRouter(Details))


