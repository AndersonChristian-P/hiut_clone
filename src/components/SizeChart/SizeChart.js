import React from "react"

const SizeChart = () => {

  return (
    <div className="size-chart">

      <div className="size-chart-heading">
        <div className="size-chart-wrapper">
          <div>
            <img src="https://s3.us-east-2.amazonaws.com/hiut-clone/Icons/icon-denim.png" alt="denim-icon" />
          </div>
          <div>
            <h3>Size chart</h3>
            <p>You can take some measurements from your old favourite jeans and compare them to any pair of Hiut jeans, using the sizing table below. Making it easier to find your size and your new favourite pair of jeans the first time you order. See how to measure yourself below.</p>
          </div>
        </div>
      </div>

      <div>
        <table>
          <tbody>

            <tr>
              <td>waist</td>
              <td>waist flat cm</td>
              <td>hem flat cm</td>
              <td>front rise cm ( 30/32 leg )</td>
              <td>front rise cm ( 34 leg )</td>
            </tr>

          </tbody>
        </table>
      </div>


      {/* <table className="size-chart-grid">
        <div className="column-titles">
          <div className="column-1">waist</div>
          <div className="column-2">waist flat cm</div>
          <div className="column-3">hem flat cm</div>
          <div className="column-4">front rise cm ( 30/32 leg )</div>
          <div className="column-5">front rise cm ( 34 leg )</div>
        </div>

        <div className="row-size">
          <div className="column-1">30</div>
          <div className="column-2">41.00</div>
          <div className="column-3">21.60</div>
          <div className="column-4">25.50</div>
          <div className="column-5">26.50</div>
        </div>

        <div className="row-size">
          <div className="column-1">31</div>
          <div className="column-2">42.25</div>
          <div className="column-3">21.95</div>
          <div className="column-4">26.00</div>
          <div className="column-5">27.00</div>
        </div>


      </table> */}




    </div>
  )
}


export default SizeChart