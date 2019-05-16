import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { userLogOut } from "./../../redux/authReducer"

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
    window.scrollTo(0, 0)
    if (this.props.authenticated) {
      const userId = this.props.user_id
      console.log(userId)
      axios.get(`/auth/addresses/${userId}`)
        .then(res => {
          console.log(res.data)
          if (res.data) {
            console.log(res.data)
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

  handleUserLogOut = () => {
    axios.get("/auth/logout")
      .then(res => {
        this.props.userLogOut()
        this.setState({
          street: "",
          city: "",
          state: "",
          zip: null,
          haveAddress: false
        })
        this.props.history.push("/account")
      }
      )
  }

  render() {
    return (
      <div>
        <div className="details-hero">
          <h1>Account Details</h1>
          <h2>Delivery Address</h2>
          <p>{this.props.firstname} {this.props.lastname}</p>

          {this.state.haveAddress ?

            <div className="address-on-file">
              <div>
                {this.state.street}
              </div>
              <div>
                {`${this.state.city}, ${this.state.state} ${this.state.zip}`}
              </div>

              {/* 
            <h3>{this.state.street}</h3>
            <h3>{`${this.state.city}, ${this.state.state} ${this.state.zip}`}</h3> */}
            </div> :

            <div className="no-address-on-file">

              <div>You have 0 Addresses stored</div>
              {/* <h2>You do not have a shipping address on file.</h2> */}
              <Link to="/address-book">
                <button>Add Address</button>
              </Link>
            </div>
          }

          <button className="logout-btn" onClick={this.handleUserLogOut} >Logout</button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { authenticated, user_id, firstname, lastname } = state.auth
  return {
    authenticated,
    user_id,
    firstname,
    lastname
  }
}

export default connect(mapStateToProps, { userLogOut })(withRouter(Details))


