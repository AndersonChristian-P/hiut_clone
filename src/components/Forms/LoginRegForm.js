import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated } from "./../../redux/authReducer"
import axios from "axios";

class Login extends Component {

  constructor() {
    super()

    this.state = {
      loginEmail: "",
      loginPassword: "",
      loginError: false,
      loginMessage: "Username or password is incorrect. Please try again.",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    if (this.props.email) {
      console.log("true")
    }
  }

  handleFormsInputUpdate = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      loginError: false
    })
  }

  handleLoginFormSubmit = async (event) => {
    event.preventDefault()
    const { loginEmail, loginPassword } = this.state
    try {
      const res = await axios.post("/auth/login", { loginEmail, loginPassword })
      this.props.updateUserEmail(res.data.email)
      this.props.updateUserId(res.data.user_id)
      this.props.updateUserFirstName(res.data.firstname)
      this.props.updateUserLastName(res.data.lastname)
      this.props.updateAuthenticated(res.data.authenticated)
      console.log(this.props)
      this.props.history.push("/info")

    } catch (err) {
      this.setState({
        loginEmail: "",
        loginPassword: "",
        loginError: true
      })
    }

  }


  render() {
    return (
      <div>

        <div>
          <h1>Sign in</h1>
          <form action="">
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="loginEmail"
              placeholder="Email Address"
              value={this.state.loginEmail}
            />
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="loginPassword"
              placeholder="Password"
              value={this.state.loginPassword}
            />
            <button onClick={this.handleLoginFormSubmit}>Sign In</button>
          </form>
          {this.state.loginError && <h3>{this.state.loginMessage}</h3>}

        </div>

        <div>
          <h1>Sign Up</h1>
          <form action="">
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
            />
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
            />
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
            />
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password} />
          </form>
          <button>Create</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { updateUserEmail, updateUserId, updateUserFirstName, updateUserLastName, updateAuthenticated })(withRouter(Login))