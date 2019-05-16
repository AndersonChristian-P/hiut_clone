import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Header extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      total: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.total !== prevState.total) {

      // console.log("THIS IS THE CART ON REDUX", this.props.cart)
      // console.log("THIS IS THE TOTAL ON REDUX", this.props.total, typeof this.props.total)

      // if (this.props.total === 0 && this.props.cart.length === 0) {
      //   return null
      // } else {}

      this.setState({
        cart: this.props.cart,
        total: this.props.total
      })



    }
  }

  render() {

    const itemsInCart = this.state.cart.map(item => +item.quantity)
      .reduce(((acc, val) => acc + val), 0)

    // console.log("THIS IS THE ITEMS IN CART FROM THE HEADER", itemsInCart)

    // console.log("NUMBER OF ITEMS IN CART", itemsInCart)
    // console.log("THIS IS THE CART", this.state.cart)

    return (
      <div>
        <div className="header-top-bar">
          <div>
            <Link to="/account" className="header-sign-in">
              Sign In
          </Link>
            <span> | </span>
            <Link to="/account" className="header-reg">
              Register
          </Link>
          </div>
          <Link to="/cart" className="header-cart">
            <div>
              <img className="bag-icon" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/bag.svg" alt="bag-icon" />
              <span>
                {itemsInCart} {this.state.cart.length === 0 || itemsInCart === 1 ? "item" : "items"} {`£${this.state.total}.00`}
              </span>
            </div>
          </Link>
        </div>

        <div className="header-nav-container">
          <Link to="/">
            <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/hiutlogo.svg" className="jiut-logo" alt="jiut-logo" />
          </Link>
          <nav className="header-nav">
            <ul>
              <li><Link className="nav" to="/collections/mens" >Shop Men's</Link></li>
              <li><Link className="nav" to="/collections/womens" >Shop Women's</Link></li>
              <li><Link className="nav" to="/our-story">Our Story</Link></li>
              <li><Link className="nav" to="/repairs" >Repairs</Link></li>
              <li><Link className="nav" to="/fit-guide" >Fit Guide</Link></li>
              <li><Link className="nav" to="/faq" >FAQ</Link></li>
              <li><Link className="nav" to="/customer-service" >Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div className="header-mobile-nav-container"></div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cart, total } = state.cart
  return {
    cart,
    total
  }
}

export default connect(mapStateToProps)(Header)