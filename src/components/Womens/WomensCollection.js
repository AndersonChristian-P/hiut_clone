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
      .then(window.scrollTo(0, 0))
  }

  render() {

    const { products } = this.state

    let codaProduct = products.filter((product) => {
      return product.id_text.includes("coda")
    }).map((product, i) => {
      return (
        <div key={i} className="coda women-product">
          <Link to={`/product/women/${product.id_text}`} >
            <img className="coda women-product-img" width="1260" src={product.img0} alt="#" />
          </Link>
          <div className="coda women-product-info">
            <h2 className="coda women-product-fit">{product.fit_desc}</h2>
            <p className="coda women-product-denim">{product.denim_type}</p>
            <p className="coda women-product-price">{`£${product.price}`}</p>
          </div>
        </div >
      )
    })

    let girlfriendProduct = products.filter((product) => {
      return product.id_text.includes("girlfriend")
    }).map((product, i) => {
      return (
        <div key={i} className="girlfriend women-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img className="coda women-product-img" width="1260" src={product.img0} alt="#" />
          </Link>
          <div className="coda women-product-info">
            <h2 className="coda women-product-fit">{product.fit_desc}</h2>
            <p className="coda women-product-denim">{product.denim_type}</p>
            <p className="coda women-product-price">{`£${product.price}`}</p>
          </div>
        </div>
      )
    })

    let dinaProduct = products.filter((product) => {
      return product.id_text.includes("dina")
    }).map((product, i) => {
      return (
        <div key={i} className="dina women-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img className="dina women-product-img" width="1260" src={product.img0} alt="#" />
          </Link>
          <div className="dina women-product-info">
            <h2 className="dina women-product-fit">{product.fit_desc}</h2>
            <p className="dina women-product-denim">{product.denim_type}</p>
            <p className="dina women-product-price">{`£${product.price}`}</p>
          </div>
        </div>
      )
    })

    let stelsbyProduct = products.filter((product) => {
      return product.id_text.includes("stelsby-low")
    }).map((product, i) => {
      return (
        <div key={i} className="stelsby women-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img className="stelsby women-product-img" width="1260" src={product.img0} alt="#" />
          </Link>
          <div className="stelsby women-product-info">
            <h2 className="stelsby women-product-fit">{product.fit_desc}</h2>
            <p className="stelsby women-product-denim">{product.denim_type}</p>
            <p className="stelsby women-product-price">{`£${product.price}`}</p>
          </div>
        </div>
      )
    })

    let stelsbyHwProduct = products.filter((product) => {
      return product.id_text.includes("high-waist")
    }).map((product, i) => {
      return (
        <div key={i} className="stelsby-hw women-product" >
          <Link to={`/product/women/${product.id_text}`} >
            <img className="stelsby-hw women-product-img" width="1260" src={product.img0} alt="#" />
          </Link>
          <div className="stelsby-hw women-product-info">
            <h2 className="stelsby-hw women-product-fit">{product.fit_desc}</h2>
            <p className="stelsby-hw women-product-denim">{product.denim_type}</p>
            <p className="stelsby-hw women-product-price">{`£${product.price}`}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="womens-collection-hero">

        <div className="womens-collection-banner partition">
          <div className="womens-banner-title">
            <h2 className="womens-collection-title">
              <p>Womens</p>
            </h2>
          </div>
        </div>

        <div className="coda-denim">
          <div className="coda-wrapper">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>The Coda</h3>
            <p>A classic slim leg jean, button fly, mid-rise, not too skinny, not too loose, made with raw denim.</p>
          </div>
          <div className="coda-denim-product">
            {codaProduct}
          </div>
        </div>


        <div className="girlfriend-denim">
          <div className="girlfriend-wrapper">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>The Girlfriend Jean</h3>
            <p>Lower in the rise, sitting just above the ankle. 13.oz denim. Rinsed once. It has quickly become the most sought after cut of the year.</p>
          </div>
          <div className="girlfriend-denim-product">
            {girlfriendProduct}
          </div>
        </div>


        <div className="dina-denim">
          <div className="dina-wrapper">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>The Dina</h3>
            <p>High waist, skinny fit. Understated. Classic. Made with a beautiful raven black stretch denim from Candiani, Italy.</p>
          </div>
          <div className="dina-denim-product">
            {dinaProduct}
          </div>
        </div>


        <div className="stelsby-denim">
          <div className="stelsby-wrapper">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>The Stelsby</h3>
            <p>The Stelsby is the result of 18 months spent perfecting our new Skinny cut. Our first stretch denim using Isko's super innovative 'Reform' denim. Looks good. Feels good.</p>
          </div>
          <div className="stelsby-denim-product">
            {stelsbyProduct}
          </div>
        </div>


        <div className="stelsby-hw-denim">
          <div className="stelsby-hw-wrapper">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>The Stelsby - High Waist</h3>
            <p>We've tweaked our women's skinny fit jean to add three centimeters to the rise, making these the perfect fit if you have a curvy shape and find our classic Stelsby a little too boyish.</p>
          </div>
          <div className="stelsby-hw-denim-product">
            {stelsbyHwProduct}
          </div>
        </div>


      </div>
    )
  }
}

export default Womens