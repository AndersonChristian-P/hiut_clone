import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

class Header extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      total: 0
    }
  }

  componentDidMount() {
    this.handleGetCart()
  }

  handleGetCart = () => {
    axios.get("/api/cart")
      .then(res => {
        this.setState({
          cart: res.data
        })
      })
  }

  handleGetTotal = () => {
    axios.get("/api/total")
      .then(res => {
        this.setState({
          total: +res.data
        })
      })
  }

  render() {

    const itemsInCart = this.state.cart.map(item => +item.quantity)
      .reduce(((acc, val) => acc + val), 0)

    return (
      <div>
        <div className="header-top-bar">
          <Link to="/account" className="header-sign-in-reg">
            Sign In | Register
          </Link>
          <Link to="/cart" className="header-cart">
            <i class="fas fa-shopping-bag"></i>
            {itemsInCart}
            {this.state.cart.length === 0 ? "item" : "items"}
            <span>{`£${this.state.total}.00`}</span>
          </Link>
        </div>

        <div className="header-nav-container">
          <div>
            Logo goes here
          </div>
          <nav className="header-nav">
            <ul>
              <li><Link to="/collections/mens" >Shop Men's</Link></li>
              <li><Link to="/collections/womens" >Shop Women's</Link></li>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/repairs" >Repairs</Link></li>
              <li><Link to="/fit-guide" >Fit Guide</Link></li>
              <li><Link to="/faq" >FAQ</Link></li>
              <li><Link to="/customer-service" >Contact</Link></li>
            </ul>







          </nav>
        </div>

        <div className="header-mobile-nav-container">

        </div>

      </div>
    )
  }
}

export default Header