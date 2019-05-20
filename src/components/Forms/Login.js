import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated, updateStreet, updateCity, updateState, updateZip, updateValidAddress } from "./../../redux/authReducer"

class Login extends Component {

  async componentDidMount() {
    let authRes = await axios.get("/auth/session")

    if (!authRes.data.user) {
      return null;
    }

    if (authRes.data.user.user_id !== this.props.user_id) {
      const { user } = authRes.data
      await this.props.updateUserEmail(user.email)
      await this.props.updateUserId(user.user_id)
      await this.props.updateUserFirstName(user.firstname)
      await this.props.updateUserLastName(user.lastname)
      await this.props.updateAuthenticated(user.authenticated)
      this.props.history.push("/info")
    }

  }

  render() {

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