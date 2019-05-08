import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Mens extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      sex: "mens"
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

    let selvedgeProducts = products.filter((product) => {
      return product.id_text.includes("selvedge")
    }).map((product, i) => {
      return (
        <div>
          <Link key={i} to={`/product/${product.id_text}`} >
            <img width="315" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit}</h2>
          <p>{`${product.men_prod_name1} ${product.men_prod_name2}`}</p>
          <p>{`£${product.price}`}</p>
          <p>{product.brief_fit_desc}</p>
        </div>
      )
    })

    return (
      <div>
        <h1>This is the Mens Collection</h1>

        <div>
          <h1>Selvedge Denim</h1>
          <p>Selvedge is an investment. Ours is from Kuroki, the atisanal Japanese denim mill. Woven on a 1959 loom. 100% indigo dyed. Unwashed 14.50z.</p>
          <div>
            {selvedgeProducts}
          </div>
        </div>

        <div>
          <h1>Organic Denim</h1>
          <p>This is our organic denim. It's a beautiful unwashed 12oz denim from a great mill in Turkey. Hard wearing too. We are in organic denim forever. Preferably longer.</p>
        </div>

        <div>
          <h1>The Anderson</h1>
          <p>This is our new fit. A wider leg. A higher rise. It is perfect for those with a bigger thigh, or just prefer to wear jeans a little looser.</p>
        </div>

      </div>
    )
  }
}


export default Mens