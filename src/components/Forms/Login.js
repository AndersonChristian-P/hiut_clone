import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated } from "./../../redux/authReducer"

class Login extends Component {

  async componentDidMount() {
    let res = await axios.get("/auth/session")

    if (!res.data.user) {
      return null;
    }

    if (res.data.user.user_id !== this.props.user_id) {
      const { user } = res.data
      this.props.updateUserEmail(user.email)
      this.props.updateUserId(user.user_id)
      this.props.updateUserFirstName(user.firstname)
      this.props.updateUserLastName(user.lastname)
      this.props.updateAuthenticated(user.authenticated)
      this.props.history.push("/info")
    }


    // if (this.props.authenticated) {
    //   this.props.history.push("/info")
    // } else {

    // }
  }

  render() {

    console.log("THIS IS THE AUTHENTICATION", this.props.authenticated)

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

export default connect(mapStateToProps, { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated })(withRouter(Login))