import React, { Component } from "react"
import axios from "axios"
import Slider from "react-slick"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import SizeChart from "./../SizeChart/SizeChart"
import MeasureJeans from "./../MeasureJeans/MeasureJeans"
import AboutJeans from "./../AboutJeans/AboutJeans"

class MensProduct extends Component {
  constructor() {
    super()

    this.state = {
      product: [{}],
      size: "",
      quantity: 1,
      vatRate: 0.20
    }
  }

  componentDidMount() {
    axios.get(`/api/product/men/${this.props.match.params.productId}`)
      .then(res => {
        this.setState({
          product: res.data
        })
      })
      .then(window.scrollTo(0, 0))

  }

  handleSizeSelection = (event) => {
    this.setState({
      size: event.target.value
    })
  }

  handleAddToCart = () => {
    const { size, quantity, vatRate } = this.state
    const { img1, prod_title, price, id_text } = this.state.product[0]
    const vatAmnt = (vatRate * price * quantity)

    if (size !== "") {
      axios.post(`/api/addtocart/${id_text}`, { size, quantity, img1, prod_title, price, vatAmnt })
        .then(res => this.props.history.push("/cart"))
    } else {
      return null
    }
  }

  render() {

    console.log("THIS IS THE VAT RATE ON STATE", this.state.vatRate)

    let sliderSettings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "men-slides"
    }

    const { product } = this.state

    const imagesArr = [product[0].img1, product[0].img2, product[0].img3, product[0].img4, product[0].img5, product[0].img6, product[0].img7]

    const images = imagesArr.map((image, i) => {
      return <div key={i}><img className="men-slider-img" src={image} alt="alternate view of product" /></div>
    })

    return (
      <div>

        <div className="men-product-route">
          <span>
            <Link className="mpr-home" to="/">
              home
            </Link>
          </span>
          <span>  >  </span>
          <span>
            <Link className="mpr-all" to="/collections/all">
              products
            </Link>
          </span>
          <span>  >  </span>
          <span className="route-prod-name">{product[0].prod_title}</span>
        </div>

        <div className="men-prod-hero">
          <div className="men-prod-slider">
            <Slider {...sliderSettings} >
              {images}
            </Slider>
          </div>
          <br />

          <div className="men-prod-info">

            <h1 className="men-prod-info-title">{product[0].prod_title}</h1>
            <p className="men-prod-info-fit">{`${product[0].fit} fit`}</p>
            <p className="men-prod-info-price">{`£${product[0].price}.00`}</p>


            <p>{product[0].long_desc}</p>
            <ul>
              <li>{product[0].prod_desc1}</li>
              <li>{product[0].prod_desc2}</li>
              <li>{product[0].prod_desc3}</li>
              <li>{product[0].prod_desc4}</li>
              <li>{product[0].prod_desc5}</li>
              <li>{product[0].prod_desc6}</li>
            </ul>

            <div className="men-prod-made-in">
              <p>Made in Wales.</p>
              <p><i>If your size is not in stock, your jeans will be cut to order, with expected delivery in 4-6 weeks. Payment is taken when ordered.</i></p>
            </div>

            <div id="men-prod-size">
              <select onChange={this.handleSizeSelection}>
                <option hidden value="">Please select a size</option>
                <option value="30/30">30 / 30 (Waist/Leg) In Stock</option>
                <option value="30/32">30 / 32 (Waist/Leg) In Stock</option>
                <option value="30/34">30 / 34 (Waist/Leg) In Stock</option>
                <option value="30/36">30 / 36 (Waist/Leg) In Stock</option>
                <option value="31/30">31 / 30 (Waist/Leg) In Stock</option>
                <option value="31/32">31 / 32 (Waist/Leg) In Stock</option>
                <option value="31/34">31 / 34 (Waist/Leg) In Stock</option>
                <option value="31/36">31 / 36 (Waist/Leg) In Stock</option>
                <option value="32/30">32 / 30 (Waist/Leg) In Stock</option>
                <option value="32/32">32 / 32 (Waist/Leg) In Stock</option>
                <option value="32/34">32 / 34 (Waist/Leg) In Stock</option>
                <option value="32/36">32 / 36 (Waist/Leg) In Stock</option>
                <option value="33/30">33 / 30 (Waist/Leg) In Stock</option>
                <option value="33/32">33 / 32 (Waist/Leg) In Stock</option>
                <option value="33/34">33 / 34 (Waist/Leg) In Stock</option>
                <option value="33/36">33 / 36 (Waist/Leg) In Stock</option>
                <option value="34/30">34 / 30 (Waist/Leg) In Stock</option>
                <option value="34/32">34 / 32 (Waist/Leg) In Stock</option>
                <option value="34/34">34 / 34 (Waist/Leg) In Stock</option>
                <option value="34/36">34 / 36 (Waist/Leg) In Stock</option>
                <option value="35/30">35 / 30 (Waist/Leg) In Stock</option>
                <option value="35/32">35 / 32 (Waist/Leg) In Stock</option>
                <option value="35/34">35 / 34 (Waist/Leg) In Stock</option>
                <option value="35/36">35 / 36 (Waist/Leg) In Stock</option>
                <option value="36/30">36 / 30 (Waist/Leg) In Stock</option>
                <option value="36/32">36 / 32 (Waist/Leg) In Stock</option>
                <option value="36/34">36 / 34 (Waist/Leg) In Stock</option>
                <option value="36/36">36 / 36 (Waist/Leg) In Stock</option>
                <option value="37/30">37 / 30 (Waist/Leg) In Stock</option>
                <option value="37/32">37 / 32 (Waist/Leg) In Stock</option>
                <option value="37/34">37 / 34 (Waist/Leg) In Stock</option>
                <option value="37/36">37 / 36 (Waist/Leg) In Stock</option>
                <option value="38/30">38 / 30 (Waist/Leg) In Stock</option>
                <option value="38/32">38 / 32 (Waist/Leg) In Stock</option>
                <option value="38/34">38 / 34 (Waist/Leg) In Stock</option>
                <option value="38/36">38 / 36 (Waist/Leg) In Stock</option>
              </select>
              <div className="men-size-chart">
                <a className="men-size-chart" href="#sizechart">Size Chart</a>
              </div>
            </div>

            <button className="men-add-cart-btn" onClick={this.handleAddToCart}>Add to basket</button>
            <p>What if they don't fit? You can exchange or return your jeans up to 90 days after purchase</p>
          </div>
        </div>

        <SizeChart><a name="sizechart">Size Chart</a></SizeChart>

        <MeasureJeans />

        <AboutJeans />

      </div>
    )
  }
}

export default withRouter(MensProduct)


