import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated, updateStreet, updateCity, updateState, updateZip, updateValidAddress } from "./../../redux/authReducer"

class Login extends Component {

  async componentDidMount() {
    let authRes = await axios.get("/auth/session")

    console.log("THIS IS THE AUTHRES", authRes.data)


    if (!authRes.data.user) {
      return null;
    }

    // let address = await axios.get(`/auth/addresses/${authRes.data.user.user_id}`)

    // console.log("THIS IS THE ADDRESS", address.data)
    // console.log("THIS IS THE STREET ADDRESS", address.data.street)

    if (authRes.data.user.user_id !== this.props.user_id) {
      const { user } = authRes.data
      // const { data } = address
      await this.props.updateUserEmail(user.email)
      await this.props.updateUserId(user.user_id)
      await this.props.updateUserFirstName(user.firstname)
      await this.props.updateUserLastName(user.lastname)
      await this.props.updateAuthenticated(user.authenticated)
      // await this.props.updateStreet(data.street)
      // await this.props.updateCity(data.city)
      // await this.props.updateState(data.state)
      // await this.props.updateZip(data.zip)
      // await this.props.updateValidAddress(data.validAddress)

      // console.log("THIS IS THE STREET OFF REDUCER", this.props.street)
      this.props.history.push("/info")
    }



    // if (this.props.authenticated) {
    //   this.props.history.push("/info")
    // }
  }

  render() {

    console.log("THIS IS THE AUTHENTICATION", this.props.authenticated)
    // console.log("STREET FROM THE REDUCER", this.props.street)

    return (
      <div>
        {this.props.children}
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

export default connect(mapStateToProps, { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated, updateStreet, updateCity, updateState, updateZip, updateValidAddress })(withRouter(Login))