import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import { requestCart, requestTotal } from "./../../redux/cartReducer"
import { updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated } from "./../../redux/authReducer"


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

    if (res.data.cart.length !== 0) {
      this.handleGetCart()
      this.handleGetTotal()
      this.handleQuantity()
    }

    if (!res.data.user) {
      return null
    }

    if (res.data.user.user_id !== this.props.user_id) {
      const { user } = res.data
      await this.props.updateUserEmail(user.email)
      await this.props.updateUserId(user.user_id)
      await this.props.updateUserFirstName(user.firstname)
      await this.props.updateUserLastName(user.lastname)
      await this.props.updateAuthenticated(user.authenticated)
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.total !== prevState.total) {

      // const itemsInCart = await this.props.cart.map(item => +item.quantity)
      //   .reduce(((acc, val) => acc + val), 0)

      const itemsInCart = () => {
        if (this.props.total === 0) {
          return 0
        } else {
          return this.props.cart.map(item => +item.quantity)
            .reduce(((acc, val) => acc + val), 0)
        }
      }

      await this.setState({
        total: this.props.total,
        cart: this.props.cart,
        // quantity: itemsInCart
        quantity: itemsInCart()
      })

      // await this.setState({
      //   quantity: itemsInCart
      // })
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
  const { firstname, user_id } = state.auth
  return {
    cart,
    total,
    firstname,
    user_id
  }
}

export default connect(mapStateToProps, { requestCart, requestTotal, updateUserId, updateUserEmail, updateUserFirstName, updateUserLastName, updateAuthenticated })(Header)
