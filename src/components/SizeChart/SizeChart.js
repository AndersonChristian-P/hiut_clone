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

      <div id="size-table">
        <div className="size-chart-table">
          <table>
            <tbody>

              <tr className="titles">
                <td>waist</td>
                <td>waist flat cm</td>
                <td>hem flat cm</td>
                <td>front rise cm <br />( 30 / 32 leg )</td>
                <td>front rise cm <br />( 34 leg )</td>
              </tr>

              <tr>
                <td>30</td>
                <td>41.00</td>
                <td>21.60</td>
                <td>25.50</td>
                <td>26.50</td>
              </tr>
              <tr>
                <td>31</td>
                <td>42.25</td>
                <td>21.95</td>
                <td>26.00</td>
                <td>27.00</td>
              </tr>
              <tr>
                <td>32</td>
                <td>43.50</td>
                <td>22.30</td>
                <td>26.50</td>
                <td>27.50</td>
              </tr>
              <tr>
                <td>33</td>
                <td>44.75</td>
                <td>22.65</td>
                <td>27.00</td>
                <td>28.00</td>
              </tr>
              <tr>
                <td>34</td>
                <td>46.00</td>
                <td>23.00</td>
                <td>27.50</td>
                <td>28.50</td>
              </tr>
              <tr>
                <td>35</td>
                <td>47.25</td>
                <td>23.35</td>
                <td>28.00</td>
                <td>29.00</td>
              </tr>
              <tr>
                <td>36</td>
                <td>48.50</td>
                <td>23.70</td>
                <td>28.50</td>
                <td>29.50</td>
              </tr>
              <tr>
                <td>37</td>
                <td>49.75</td>
                <td>24.05</td>
                <td>27.50</td>
                <td>30.00</td>
              </tr>
              <tr>
                <td>38</td>
                <td>51.00</td>
                <td>24.40</td>
                <td>29.50</td>
                <td>30.50</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}


export default SizeChart