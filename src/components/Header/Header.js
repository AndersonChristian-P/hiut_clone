import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      This is the Header
      <Link to="/collections/mens" >Shop Men's</Link>
      <Link to="/collections/womens" >Shop Women's</Link>
    </div>
  )
}

export default Header