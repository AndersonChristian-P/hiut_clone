import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div id="footer-logo-container" >
          <img id="footer-logo" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/owl.png" alt="#" />
        </div>


        <nav>
          <ul className="row one">
            <li>
              <a href="tel: 44-0-1239-612-469">
                t: +55 (0)5555 555 555
            </a>
            </li>
            <li>
              <a href="mailto: h1@jiutdenim.co.uk">
                e: h1@nicemail.com
              </a>
            </li>
            <li>
              <Link to="/customer-service">customer service</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">terms & conditions</Link>
            </li>
          </ul>

          <ul className="row two" >
            <li>
              <a href="https://www.facebook.com/HiutDenimCo/" target="_blank" rel="noopener noreferrer">facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/hiutdenim/" target="_blank" rel="noopener noreferrer">instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/hiutdenim" target="_blank" rel="noopener noreferrer">twitter</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/hiutdenim/" target="_blank" rel="noopener noreferrer">pintrest</a>
            </li>
            <li>
              <a href="https://medium.com/@hiutdenim" target="_blank" rel="noopener noreferrer">medium</a>
            </li>
          </ul>

          <ul className="row three" >
            <li>
              <Link to="/how-to-wash">how to wash</Link>
            </li>
            <li>
              <Link to="/store-locations">stockists</Link>
            </li>
            <li>
              <Link to="/how-to-wash">no wash club</Link>
            </li>
            <li className="li-no-show">|</li>
            <li className="li-no-show">|</li>
          </ul>
        </nav>
      </div>

      <div>
        <div className="copyright">
          All rights reserved | © MMXIII
        </div>
      </div>

    </div >
  )
}

export default Footer