import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated, updateStreet, updateCity, updateState, updateZip, updateValidAddress } from "./../../redux/authReducer"
import axios from "axios"


class Login extends Component {

  constructor() {
    super()

    this.state = {
      loginEmail: "",
      loginPassword: "",
      loginError: false,
      loginMessage: "Username or password is incorrect. Please try again.",
      forgotPassword: false,
      forgotPasswordEmail: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      registerError: false,
      registerMessage: "Something went wrong. Please try again."
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.authenticated) {
      this.props.history.push("/info")
    } else {
      return null
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
      this.props.history.push("/info")
    } catch (err) {
      this.setState({
        loginEmail: "",
        loginPassword: "",
        loginError: true
      })
    }
  }

  handleRegistrationFormSubmit = async (event) => {
    event.preventDefault()
    const { firstname, lastname, email, password } = this.state

    if (firstname === "" || lastname === "" || email === "" || password === "") {
      return this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        registerError: true
      })
    } else {
      try {
        const res = await axios.post("/auth/register", { firstname, lastname, email, password })
        this.props.updateAuthenticated(res.data.authenticated)
        this.props.updateUserEmail(res.data.email)
        this.props.updateUserId(res.data.user_id)
        this.props.updateUserFirstName(res.data.firstname)
        this.props.updateUserLastName(res.data.lastname)
        this.props.history.push("/info")
      } catch (err) {
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          registerError: true
        })
      }
    }
  }


  handleForgotPassword = (e) => {
    e.preventDefault()
    this.setState({
      forgotPassword: !this.state.forgotPassword
    })
  }

  forgotPasswordSubmit = async (e) => {
    e.preventDefault()
    const { forgotPasswordEmail } = this.state
    const message = "We got a request that you wanted to reset your password. Please click here to continue."
    await axios.post("/api/passwordreset", { forgotPasswordEmail, message })
      .then(this.setState({
        forgotPassword: false,
        forgotPasswordEmail: ""
      }))

  }


  render() {
    return (
      <div id="login-reg-hero">

        <div id="login">

          {!this.state.forgotPassword ?

            <span>
              <h1>Sign in</h1>

              <form className="login-form" onSubmit={this.handleLoginFormSubmit}>
                <p>Email Address</p>
                <input
                  onChange={this.handleFormsInputUpdate}
                  type="text"
                  name="loginEmail"
                  className="login-input"
                  value={this.state.loginEmail}
                />
                <p className="login-password">Password</p>
                <input
                  onChange={this.handleFormsInputUpdate}
                  type="password"
                  name="loginPassword"
                  className="login-input"
                  value={this.state.loginPassword}
                />
                <div>
                  <button>Sign In</button>
                </div>
                <div>
                  <span className="login-forgot-password" onClick={this.handleForgotPassword}>Forgot your password?</span>
                </div>
              </form>

              <div className="login-error">
                {this.state.loginError && <h5>{this.state.loginMessage}</h5>}
              </div>
            </span> :

            <span>
              <h1>Reset Password</h1>
              <p>We will send you an email to reset your password</p>

              <form className="login-form">
                <p>Email</p>
                <input
                  onChange={this.handleFormsInputUpdate}
                  type="text"
                  name="forgotPasswordEmail"
                  className="login-input"
                  value={this.state.forgotPasswordEmail}
                />

                <div className="forgot-password-btns">
                  <div>
                    <button className="forgot-password-submit-btn" onClick={this.forgotPasswordSubmit}>Submit</button>
                  </div>
                  <span className="forgot-password-span">or</span>
                  <div>
                    <button className="forgot-password-cancel-btn" onClick={this.handleForgotPassword}>Cancel</button>
                  </div>
                </div>
              </form>

            </span>

          }
        </div>

        <div id="register">
          <h1>Sign Up</h1>
          <form className="register-form" onSubmit={this.handleRegistrationFormSubmit}>
            <p className="register-firstname">First Name</p>
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="firstname"
              className="register-input"
              value={this.state.firstname}
            />
            <p className="register-lastname">Last Name</p>
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="lastname"
              className="register-input"
              value={this.state.lastname}
            />
            <p className="register-email">Email Address</p>
            <input
              onChange={this.handleFormsInputUpdate}
              type="text"
              name="email"
              className="register-input"
              value={this.state.email}
            />
            <p className="register-password">Password</p>
            <input
              onChange={this.handleFormsInputUpdate}
              type="password"
              name="password"
              className="register-input"
              value={this.state.password} />
            <div>
              <button>Create</button>
            </div>

          </form>

          <div className="register-error">
            {this.state.registerError && <h5>{this.state.registerMessage}</h5>}
          </div>
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

export default connect(mapStateToProps, { updateUserEmail, updateUserId, updateUserFirstName, updateUserLastName, updateAuthenticated, updateStreet, updateCity, updateState, updateZip, updateValidAddress })(withRouter(Login))