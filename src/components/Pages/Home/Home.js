import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="/">
        <section className="home-hero">
          <div className="home-hero-wrap topleft">
            <h2>
              Do One
            <br />
              Thing Well.
          </h2>
          </div>
        </section>

        <section className="home-partition cf" >

          <article className="article cf denim first">
            <div>
              <img className="icon-denim" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="#" />
            </div>
            <div>

            </div>
            <Link to="/collections/mens" >
              <figure>
                <img className="article-image-men" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/menhome.jpg" alt="#" />
              </figure>
            </Link>
          </article>




          {/* <article className="article cf denim second">
            <Link to="/collections/women">
              <figure>
                <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/womenhome.jpg" alt="#" />
              </figure>
            </Link>
          </article> */}


        </section>
      </Link>
    </div>
  )
}

export default Home