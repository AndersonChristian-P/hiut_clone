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
        <div key={i} className="selvedge-product">
          <Link to={`/product/men/${product.id_text}`} >
            <img className="selvedge-product-img" src={product.img0} alt="#" />
          </Link>
          <div className="selvedge-product-info">
            <h2 className="selvedge-product-fit">{product.fit}</h2>
            <p className="selvedge-product-name">{`${product.men_prod_name1} ${product.men_prod_name2}`}</p>
            <p className="selvedge-product-price">{`£${product.price}`}</p>
            <p className="selvedge-product-desc">{product.brief_fit_desc}</p>
          </div>
        </div>
      )
    })

    let organicProducts = products.filter((product) => {
      return product.id_text.includes("organic")
    }).map((product, i) => {
      return (
        <div key={i} className="organic-product">
          <Link to={`/product/men/${product.id_text}`} >
            <img width="315px" src={product.img0} alt="#" />
          </Link>
          <div className="organic-product-info">
            <h2 className="organic-product-fit">{product.fit}</h2>
            <p className="organic-product-name">{`${product.men_prod_name1} ${product.men_prod_name2}`}</p>
            <p className="organic-product-price">{`£${product.price}`}</p>
            <p className="organic-product-desc">{product.brief_fit_desc}</p>
          </div>
        </div>
      )
    })

    let andersonProduct = products.filter((product) => {
      return product.id_text.includes("wide")
    }).map((product, i) => {
      return (
        <div key={i} className="anderson-product">
          <Link to={`/product/men/${product.id_text}`} >
            <img width="1255px" src={product.img0} alt="#" />
          </Link>
          <div className="anderson-product-info">
            <h2 className="anderson-product-fit">{product.fit}</h2>
            <p className="anderson-product-name">{`${product.men_prod_name1} ${product.men_prod_name2}`}</p>
            <p className="anderson-product-price">{`£${product.price}`}</p>
            <p className="anderson-product-desc">{product.brief_fit_desc}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="mens-collection-hero">

        <div className="mens-collection-banner partition">
          <div className="mens-banner-title">
            <h2 className="mens-collection-title">
              <p>Mens</p>
            </h2>
          </div>
        </div>

        <div className="selvedge-denim">
          <div className="selvedge">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>Selvedge Denim</h3>
            <p>Selvedge is an investment. Ours is from Kuroki, the atisanal Japanese denim mill. Woven on a 1959 loom. 100% indigo dyed. Unwashed 14.5oz.</p>
          </div>
          <div className="selvedge-denim-products">
            {selvedgeProducts}
          </div>
        </div>

        <div className="organic-denim">
          <div className="organic">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>Organic Denim</h3>
            <p>This is our organic denim. It's a beautiful unwashed 12oz denim from a great mill in Turkey. Hard wearing too. We are in organic denim forever. Preferably longer.</p>
          </div>
          <div className="organic-denim-products">
            {organicProducts}
          </div>
        </div>

        <div className="anderson-denim">
          <div className="anderson">
            <div>
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
            </div>
            <h3>Anderson Denim</h3>
            <p>This is our new fit. A wider leg. A higher rise. It is perfect for those with a bigger thigh, or just prefer to wear jeans a little looser.</p>
          </div>
          <div className="anderson-denim-products">
            {andersonProduct}
          </div>
        </div>

      </div>
    )
  }
}


export default Mens