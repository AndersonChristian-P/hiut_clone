import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios";
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { userLogOut, updateStreet, updateCity, updateState, updateZip, updateValidAddress } from "./../../redux/authReducer"

class Details extends Component {

  constructor() {
    super()

    this.state = {
      street: "",
      city: "",
      state: "",
      zip: "",
      validAddress: false
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0)

    let res = await axios.get("/auth/session")

    if (!res.data.user) {
      this.props.history.push("/account")
    } else {
      await this.handleGetAddress()
    }



    // if (this.props.authenticated) {
    //   await this.handleGetAddress()
    // } else {
    //   this.props.history.push("/account")
    // }
  }

  handleGetAddress = async () => {

    let res = await axios.get("/auth/session")

    if (!res.data.user) {
      return null;
    }




    const userAddress = await axios.get(`/auth/addresses/${res.data.user.user_id}`)

    console.log("THIS IS THE USER ADDRESS FROM DETAILS", userAddress)

    if (userAddress.data) {
      await this.props.updateStreet(userAddress.data.street)
      await this.props.updateCity(userAddress.data.city)
      await this.props.updateState(userAddress.data.state)
      await this.props.updateZip(userAddress.data.zip)
      await this.props.updateValidAddress(userAddress.data.validAddress)
    } else {
      return null
    }




    // if (this.props.street === "") {
    //   const userAddress = await axios.get(`/auth/addresses/${this.props.user_id}`)
    //   if (userAddress.data) {
    //     await this.props.updateStreet(userAddress.data.street)
    //     await this.props.updateCity(userAddress.data.city)
    //     await this.props.updateState(userAddress.data.state)
    //     await this.props.updateZip(userAddress.data.zip)
    //     await this.props.updateValidAddress(userAddress.data.validAddress)

    //   }
    // }

    this.setState({
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      validAddress: this.props.validAddress
    })


  }

  handleUserLogOut = () => {
    axios.get("/auth/logout")
      .then(res => {
        this.props.userLogOut()
        this.setState({
          street: "",
          city: "",
          state: "",
          zip: "",
          haveAddress: false
        })
        this.props.history.push("/account")
      }
      )
  }

  render() {

    console.log("THIS IS THE STATE", this.state)


    return (
      <div>
        <div className="details-hero">
          <h1>Account Details</h1>
          <h2>Delivery Address</h2>
          <p>{this.props.firstname} {this.props.lastname}</p>

          {this.state.validAddress ?

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

const mapStateToProps = (reduxState) => {
  const { authenticated, user_id, firstname, lastname, street, city, state, zip, validAddress } = reduxState.auth
  return {
    authenticated,
    user_id,
    firstname,
    lastname,
    street,
    city,
    state,
    zip,
    validAddress
  }
}

export default connect(mapStateToProps, { userLogOut, updateStreet, updateCity, updateState, updateZip, updateValidAddress })(withRouter(Details))


