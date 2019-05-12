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
        <div key={i} className="coda-product">
          <Link to={`/product/women/${product.id_text}`} >
            <img width="1260" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit_desc}</h2>
          <p>{product.denim_type}</p>
          <p>{`£${product.price}`}</p>
        </div>
      )
    })

    let girlfriendProduct = products.filter((product) => {
      return product.id_text.includes("girlfriend")
    }).map((product, i) => {
      return (
        <div key={i} className="girlfriend-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img width="1260" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit_desc}</h2>
          <p>{product.denim_type}</p>
          <p>{`£${product.price}`}</p>
        </div>
      )
    })

    let dinaProduct = products.filter((product) => {
      return product.id_text.includes("dina")
    }).map((product, i) => {
      return (
        <div key={i} className="dina-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img width="1260" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit_desc}</h2>
          <p>{product.denim_type}</p>
          <p>{`£${product.price}`}</p>
        </div>
      )
    })

    let stelsbyProduct = products.filter((product) => {
      return product.id_text.includes("stelsby-low")
    }).map((product, i) => {
      return (
        <div key={i} className="stelsby-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img width="1260" src={product.img0} alt="#" />
          </Link>
          <h2>{product.fit_desc}</h2>
          <p>{product.denim_type}</p>
          <p>{`£${product.price}`}</p>
        </div>
      )
    })

    let stelsbyHwProduct = products.filter((product) => {
      return product.id_text.includes("high-waist")
    }).map((product, i) => {
      return (
        <div key={i} className="stelsby-hw-product" >
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
          <div>
            {girlfriendProduct}
          </div>
        </div>

        <div>
          <h1>The Dina</h1>
          <p>High waist, skinny fit. Understated. Classic. Made with a beautiful raven black stretch denim from Candiani, Italy</p>
          <div>
            {dinaProduct}
          </div>
        </div>

        <div>
          <h1>The Stelsby</h1>
          <p>The Stelsby is the result of 18 months spent perfecting our new Skinny cut. Our first stretch denim using Isko's super innovative 'Reform' denim. Looks good. Feels good.</p>
          <div>
            {stelsbyProduct}
          </div>
        </div>

        <div>
          <h1>The Stelsby - High Waist</h1>
          <p>We've tweaked our women's skinny fit jean to add three centimeters to the rise, making these the perfect fit if you have a curvy shape and find our classic Stelsby a little too boyish.</p>
          <div>
            {stelsbyHwProduct}
          </div>
        </div>

      </div>
    )
  }
}

export default Womens