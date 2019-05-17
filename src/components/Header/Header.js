import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { requestCart, requestTotal } from "./../../redux/cartReducer"
import axios from "axios"

class Header extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      quantity: 0,
      total: 0,
      firstname: ""
    }
  }


  async componentDidMount() {
    let res = await axios.get("/auth/session")

    if (res.data.cart.length === 0) {
      return null
    } else {
      this.handleGetCart()
      this.handleGetTotal()
      this.handleQuantity()
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.total !== prevState.total) {

      const itemsInCart = await this.props.cart.map(item => +item.quantity)
        .reduce(((acc, val) => acc + val), 0)

      await this.setState({
        cart: this.props.cart,
        quantity: itemsInCart,
        total: this.props.total
      })
    }
  }

  handleGetCart = async () => {
    await this.props.requestCart()
    this.setState({
      cart: this.props.cart
    })
  }

  handleGetTotal = async () => {
    await this.props.requestTotal()
    this.setState({
      total: +this.props.total
    })
  }

  handleQuantity = async () => {
    const itemsInCart = await this.state.cart.map(item => +item.quantity)
      .reduce(((acc, val) => acc + val), 0)
    this.setState({
      quantity: itemsInCart
    })
  }


  render() {

    console.log("--- THIS IS CART ON STATE ---", this.state.cart)
    console.log("--- THIS IS THE TOTAL ON STATE ---", this.state.total)
    console.log("--- THIS IS THE QUANTITY ON STATE ---", this.state.quantity)

    return (
      <div>
        <div className="header-top-bar">

          <div>
            {!this.props.firstname ?

              <span>
                <Link to="/account" className="header-sign-in">
                  Sign In
                </Link>
                <span> | </span>
                <Link to="/account" className="header-reg">
                  Register
              </Link>
              </span>

              :

              <span>
                <Link to="/account" className="header-sign-in">
                  Hi, {this.props.firstname}
                </Link>
                <span> | </span>
                <Link to="/account" className="header-reg">
                  Address Book
                </Link>
              </span>
            }
          </div>

          <Link to="/cart" className="header-cart">
            <div>
              <img className="bag-icon" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/bag.svg" alt="bag-icon" />
              <span>
                {this.state.quantity} {this.state.cart.length === 0 || this.state.quantity === 1 ? "item" : "items"} {`£${this.state.total}.00`}
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
              <li><Link className="nav" to="/documentary">Documentary</Link></li>
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
  const { firstname } = state.auth
  return {
    cart,
    total,
    firstname
  }
}

export default connect(mapStateToProps, { requestCart, requestTotal })(Header)