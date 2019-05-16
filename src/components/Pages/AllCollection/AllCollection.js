import React, { Component } from "react"
import { Link } from "react-router-dom"

class AllCollection extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="hero-our-denim">

        <div>
          <div className="our-denim">
            <div className="our-denim-heading">
              <div>
                <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
              </div>
              <h3>Our Denim</h3>
            </div>
            <div className="left-right-panes">

            </div>
          </div>

          <article className="article-left-our-denim">
            <Link to="/collections/mens">
              <figure className="article-left-img-wrapper">
                <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/menhome.jpg" alt="men's jeans" />
                <div className="article-left-caption">
                  <h1>
                    <span>Men's Jeans</span>
                  </h1>
                </div>
              </figure>
            </Link>
          </article>

          <article className="article-right-our-denim">
            <Link to="/collections/womens">
              <figure className="article-right-img-wrapper">
                <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/womenhome.jpg" alt="women's jeans" />
                <div className="article-right-caption">
                  <h1>
                    <span>Women's Jeans</span>
                  </h1>
                </div>
              </figure>
            </Link>
          </article>
        </div>





      </div>
    )
  }

}

export default AllCollection



