import React from "react"
import { Link } from "react-router-dom"


const AboutJeans = () => {
  return (
    <div className="about-jeans">

      <div className="about-jeans-heading">
        <div className="about-jeans-wrapper">
          <div className="about-jeans-img-container">
            <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim icon" />
          </div>
          <div>
            <h3>About Our Jeans</h3>
          </div>
        </div>
      </div>

      <div className="about-panels">

        <div className="left-panel">
          <div className="one">
            <div className="about-panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/hands-delivery-icon.png" alt="delivery hands" />
            </div>
            <h4>Delivery And Returns</h4>
            <p>We ship with Royal Mail Tracked Service. We offer Free Returns on UK orders. We offer 30day refunds on all unworn jeans. No questions asked.</p>
            <Link className="about-link" to="/customer-service" >Read more.</Link>
          </div>

          <div className="two">
            <div className="about-panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/tools-repair-icon.png" alt="repair icon" />
            </div>
            <h4>Free Repairs</h4>
            <p>We stand by our jeans even when they fail you. We offer free repairs for the life of your jeans. One rule. You have to send them back washed.</p>
            <Link className="about-link" to="/customer-service" >Read more.</Link>
          </div>
        </div>

        <div className="right-panel">
          <div className="one">
            <div className="about-panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/sewingmachine-factory-icon.png" alt="sewing machine factory" />
            </div>
            <h4>Our Factory</h4>
            <p>We are not here to make the most jeans we can, but the best jeans we can. The GrandMasters can only make 100 pairs of Hiut's a week.</p>
            <Link className="about-link" to="/customer-service" >Read more.</Link>
          </div>

          <div className="two">
            <div className="about-panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/heads-service-icon.png" alt="customer service icon" />
            </div>
            <h4>Help</h4>
            <p>What is selvedge? What is my size? Can I return jeans if I don’t love them? We're human, give us a call.</p>
            <p>05555 555555.</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default AboutJeans