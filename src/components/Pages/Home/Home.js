import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="/collections/all">
        <section className="home-hero">
          <div className="home-hero-wrap topleft">
            <h2>
              Do One
            <br />
              Thing Well.
          </h2>
          </div>
        </section>
      </Link>
      <span className="after" ></span>

      <section className="home-partition cf" >

        <div className="home-partition left">
          <div className="icon-container">
            <img className="icon-denim" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
          </div>
          <div className="wrapper">
            <header>Men's Jeans</header>
            <p>Five fits: Wide. Regular. Slim. Slim Tapered. Skinny. Two raw denims: Organic. Selvedge. And on Tech Fabric for the more active. We make the best jeans we can, not the most jeans we can.</p>
            <footer>
              <Link className="product-link" to="/collections/mens">Shop Men's Jeans</Link>
            </footer>
          </div>
          <div className="home-img-container">
            <Link to="/collections/mens" className="home-mens-link" >
              <img className="home-img" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/menhome.jpg" alt="#" />
            </Link>
          </div>
        </div>

        <div className="home-partition right">
          <div className="icon-container">
            <img className="icon-denim" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
          </div>
          <div className="wrapper">
            <header>Women's Jeans</header>
            <p>Four Fits: Skinny. High Waist. Girlfriend. Slim. Three denims: Two stretch denims, rinsed. One raw denim. We make the best jeans we can, not the most jeans we can.</p>
            <footer>
              <Link className="product-link" to="/collections/womens">Shop Women's Jeans</Link>
            </footer>
          </div>
          <div className="home-img-container">
            <Link to="/collections/womens" className="home-womens-link" >
              <img className="home-img" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/womenhome.jpg" alt="#" />
            </Link>
          </div>
        </div>

      </section>

      <section className="video-container">
        <div className="video-wrapper">
          <iframe width="560" title="Denim for Duchess" height="315" src="https://www.youtube.com/embed/CD-C8V8NNlo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

    </div>
  )
}

export default Home


  // < article className = "article cf denim first" >
  //   <div>
  //     <img className="icon-denim" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="#" />
  //   </div>
  //   <div>

  //   </div>
  //   <Link to="/collections/mens" >
  //     <figure>
  //       <img className="article-image-men" src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/menhome.jpg" alt="#" />
  //     </figure>
  //   </Link>
  //       </article >




  // <article className="article cf denim second">
  //   <Link to="/collections/women">
  //     <figure>
  //       <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/home_page/womenhome.jpg" alt="#" />
  //     </figure>
  //   </Link>
  // </article>