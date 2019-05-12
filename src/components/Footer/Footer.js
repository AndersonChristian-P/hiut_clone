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
          <ul class="row one">
            <li>
              <a href="tel: 44-0-1239-612-469">
                t: +44 (0)1239 612 469
            </a>
            </li>
            <li>
              <a href="mailto: h1@jiutdenim.co.uk">
                e: h1@jiutdenim.co.uk
              </a>
            </li>
            <li>
              <Link to="/customer-service">customer service</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">terms & conditions</Link>
            </li>
          </ul>

          <ul class="row two" >
            <li>
              <a href="https://www.facebook.com/HiutDenimCo/">facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/hiutdenim/">instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/hiutdenim">twitter</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/hiutdenim/">pintrest</a>
            </li>
            <li>
              <a href="https://medium.com/@hiutdenim">medium</a>
            </li>
          </ul>

          <ul class="row three" >
            <li>
              <Link path="/how-to-wash">how to wash</Link>
            </li>
            <li>
              <Link path="/store-locations">stockists</Link>
            </li>
            <li>
              <Link path="/how-to-wash">no wash club</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="copyright">
        All rights reserved | © MMXIII
      </div>

    </div >
  )
}

export default Footer