import React from "react"


const MeasureJeans = () => {
  return (
    <div className="measure-jeans">

      <div className="measure-jeans-heading">
        <div className="measure-jeans-wrapper">
          <div className="measure-jeans-img-container">
            <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/ruler-icon.png" alt="ruler icon" />
          </div>
          <div>
            <h3>How to measure like a Grand Master</h3>
          </div>
        </div>
      </div>

      <div className="measure-panels">

        <div className="left-panel">
          <div className="one">
            <div className="panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/size-waist-measure.jpg" alt="measure waist" />
            </div>
            <h4>1, Waist</h4>
            <p>What size am I? Simple. Just lay your old favourite jeans down flat and measure straight across the back waistband. Write the measurement down. See photo.</p>
          </div>

          <div className="two">
            <div className="panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/size-insideleg-measure.jpg" alt="measure inside leg" />
            </div>
            <h4>2, Inside Leg</h4>
            <p>Measure from the bottom of the hem (the bottom of the leg) and up to the crutch. That will give you the inside leg measurement. See photo for help.</p>
          </div>
        </div>

        <div className="right-panel">
          <div className="one">
            <div className="panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/size-frontrise-measure.jpg" alt="measure front rise" />
            </div>
            <h4>3, Front Rise</h4>
            <p>It might help to look at the photos. But with your jeans flat, measure from overlapping seams in the crutch, to the top of the front waistband. Pretty simple.</p>
          </div>

          <div className="two">
            <div className="panel-image">
              <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Pages/product/size-hem-measure.jpg" alt="measure hem" />
            </div>
            <h4>4, Hem</h4>
            <p>With the leg laid flat, measure from one side to the other across the front of the leg. Simple. Again, the photo might help you with this.</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default MeasureJeans