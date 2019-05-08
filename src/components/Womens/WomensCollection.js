import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Womens extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      sex: "womens"
    }
  }

  componentDidMount() {
    const { sex } = this.state
    axios.get(`/api/collections/${sex}`)
      .then(res => {
        this.setState({
          products: res.data,
        })
      })
  }

  render() {

    const { products } = this.state

    let codaProduct = products.filter((product) => {
      return product.id_text.includes("coda")
    }).map((product, i) => {
      return (
        <div key={i}>
          <Link to={`/product/women/${product.id_text}`} >
            <img width="1260" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit_desc}</h2>
          <p>{product.denim_type}</p>
          <p>{`£${product.price}`}</p>
        </div>
      )
    })

    return (
      <div>

        <h1>This is the Womens Collection</h1>

        <div>
          <h1>The Coda</h1>
          <p>A classic slim leg jean, button fly, mid-rise, not too skinny, not too loose, made with raw denim.</p>
          <div>
            {codaProduct}
          </div>
        </div>

        <div>
          <h1>The Girlfriend Jean</h1>
          <p>Lower in the rise, sitting just above the ankle. 13.oz denim. Rinsed once. It has quickly become the most sought after cut of the year</p>
        </div>

        <div>
          <h1>The Dina</h1>
          <p>High waist, skinny fit. Understated. Classic. Made with a beautiful raven black stretch denim from Candiani, Italy</p>
        </div>

      </div>
    )
  }
}

export default Womens