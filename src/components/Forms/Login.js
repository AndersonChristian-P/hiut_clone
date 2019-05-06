import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class Login extends Component {

  componentDidMount() {
    if (this.props.authenticated) {
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
  return state
}

export default connect(mapStateToProps)(withRouter(Login))