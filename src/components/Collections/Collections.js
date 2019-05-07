import React, { Component } from "react"
import axios from "axios";

class Collections extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      sex: "mens"
    }
  }


  componentDidMount() {
    if (this.props.match.params === "mens") {
      const sex = this.props.match.params
      axios.get(`/api/products/${sex}`)
        .then(res => {
          this.setState({
            products: res.data
          })
        })
    }
  }

  render() {
    return (
      <div>
        <h1>This is the Collections page.</h1>
      </div>
    )
  }
}

export default Collections