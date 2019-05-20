import React, { Component } from "react"
import axios from "axios"
import Slider from "react-slick"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import SizeChart from "./../SizeChart/SizeChart"
import MeasureJeans from "./../MeasureJeans/MeasureJeans"
import AboutJeans from "./../AboutJeans/AboutJeans"

class WomensProduct extends Component {
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
    axios.get(`/api/product/women/${this.props.match.params.productId}`)
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
        .then(
          this.props.history.push("/cart")
        )
    } else {
      return null
    }
  }

  render() {

    let sliderSettings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "women-slides"
    }

    const { product } = this.state

    const imagesArr = [product[0].img1, product[0].img2, product[0].img3]

    const images = imagesArr.map((image, i) => {
      return <div key={i} ><img className="women-slider-img" src={image} alt="alternative view of product" /></div>
    })

    return (
      <div>

        <div className="women-product-route">
          <span>
            <Link className="wpr-home" to="/">
              home
            </Link>
          </span>
          <span>  >  </span>
          <span>
            <Link className="wpr-all" to="/collections/all">
              products
            </Link>
          </span>
          <span>  >  </span>
          <span className="route-prod-name">{product[0].prod_title}</span>
        </div>

        <div className="women-prod-hero">
          <div className="women-prod-slider">
            <Slider {...sliderSettings} >
              {images}
            </Slider>
          </div>
          {/* <br /> */}

          <div className="women-prod-info-container">
            <div className="women-prod-info">

              <div className="women-prod-info-purchase">
                <h1 className="women-prod-info-title">{product[0].prod_title}</h1>
                <p className="women-prod-info-fit">{product[0].fit}</p>
                <p className="women-prod-info-price">{`£${product[0].price}.00`}</p>
                <p className="women-prod-info-subtitle"><strong>The Fit:</strong></p>
                <p>{product[0].fit_long_desc1}</p>
                <p>{product[0].fit_long_desc2}</p>
                <p className="women-prod-info-subtitle"><strong>The Denim:</strong></p>
                <p>{product[0].denim_long_desc}</p>
                <p className="women-prod-info-subtitle"><strong>Details:</strong></p>
                <p>{product[0].details_long_desc}</p>

                <div className="women-prod-made-in">
                  <p>Made in Wales.</p>
                  <p><i>If your size is not in stock, your jeans will be cut to order, with expected delivery in 4-6 weeks. Payment is taken when ordered.</i></p>
                </div>

                <div id="women-prod-size">
                  <select onChange={this.handleSizeSelection}>
                    <option hidden value="">Please select a size</option>
                    <option value="UK12-30/28">UK12-30 / 28 (Waist / Leg) In Stock</option>
                    <option value="UK12-30/30">UK12-30 / 30 (Waist / Leg) In Stock</option>
                    <option value="UK12-30/32">UK12-30 / 32 (Waist / Leg) In Stock</option>
                    <option value="UK12-30/34">UK12-30 / 34 (Waist / Leg) In Stock</option>
                    <option value="UK12-31/28">UK12-31 / 28 (Waist / Leg) In Stock</option>
                    <option value="UK12-31/30">UK12-31 / 30 (Waist / Leg) In Stock</option>
                    <option value="UK12-31/32">UK12-31 / 32 (Waist / Leg) In Stock</option>
                    <option value="UK12-31/34">UK12-31 / 34 (Waist / Leg) In Stock</option>
                    <option value="UK12-32/28">UK12-32 / 28 (Waist / Leg) In Stock</option>
                    <option value="UK12-32/30">UK12-32 / 30 (Waist / Leg) In Stock</option>
                    <option value="UK12-32/32">UK12-32 / 32 (Waist / Leg) In Stock</option>
                    <option value="UK12-32/34">UK12-32 / 34 (Waist / Leg) In Stock</option>
                    <option value="UK12-33/28">UK12-33 / 28 (Waist / Leg) In Stock</option>
                    <option value="UK12-33/30">UK12-33 / 30 (Waist / Leg) In Stock</option>
                    <option value="UK12-33/32">UK12-33 / 32 (Waist / Leg) In Stock</option>
                    <option value="UK12-33/34">UK12-33 / 34 (Waist / Leg) In Stock</option>
                    <option value="UK12-34/28">UK12-34 / 28 (Waist / Leg) In Stock</option>
                    <option value="UK12-34/30">UK12-34 / 30 (Waist / Leg) In Stock</option>
                    <option value="UK12-34/32">UK12-34 / 32 (Waist / Leg) In Stock</option>
                    <option value="UK12-34/34">UK12-34 / 34 (Waist / Leg) In Stock</option>
                  </select>
                  <div className="women-size-chart">
                    {/* <a className="women-size-chart" href="#sizechart">Size Chart</a> */}
                    <span className="women-size-chart">Size Chart</span>
                  </div>
                </div>

                <button className="women-add-cart-btn" onClick={this.handleAddToCart}>Add to basket</button>
                <p>What if they don't fit? You can exchange or return your jeans up to 90 days after purchase</p>
              </div>
            </div>
          </div>
        </div>

        {/* <SizeChart><a name="sizechart">Size Chart</a></SizeChart> */}
        <SizeChart />

        <MeasureJeans />

        <AboutJeans />

      </div >
    )
  }
}

export default withRouter(WomensProduct)