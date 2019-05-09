import React, { Component } from "react"
import axios from "axios"
import Slider from "react-slick"

class WomensProduct extends Component {
  constructor() {
    super()

    this.state = {
      product: [{}],
      size: "",
      quantity: 1
    }
  }

  componentDidMount() {
    axios.get(`/api/product/women/${this.props.match.params.productId}`)
      .then(res => {
        this.setState({
          product: res.data
        })
      })
  }

  render() {

    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const { product } = this.state

    const imagesArr = [product[0].img1, product[0].img2, product[0].img3]

    const images = imagesArr.map((image, i) => {
      return <div key={i} ><img width="640px" src={image} alt="#" /></div>
    })

    return (
      <div>
        <h1>This is the Women's Product page.</h1>
        <div className="women-prod-slider">
          <Slider {...sliderSettings} >
            {images}
          </Slider>
        </div>
        <br />

        <div className="women-prod-info-purchase">
          <h1>{product[0].prod_title}</h1>
          <p>{product[0].fit}</p>
          <p>{`£${product[0].price}.00`}</p>
          <p><strong>The Fit:</strong></p>
          <p>{product[0].fit_long_desc1}</p>
          <p>{product[0].fit_long_desc2}</p>
          <p><strong>The Denim:</strong></p>
          <p>{product[0].denim_long_desc}</p>
          <p><strong>Details:</strong></p>
          <p>{product[0].details_long_desc}</p>
          <p>Made in Wales.</p>
          <p><i>If your size is not in stock, your jeans will be cut to order, with expected delivery in 4-6 weeks. Payment is taken when ordered.</i></p>
          <hr />

          <select onChange={this.handleSizeSelection} id="women-prod-size">
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
          <hr />

          <button>Add to basket</button>
          <p>What if they don't fit? You can exchange or return your jeans up to 90 days after purchase</p>
        </div>


      </div>
    )
  }
}

export default WomensProduct