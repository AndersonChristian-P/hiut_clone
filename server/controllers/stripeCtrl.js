require("dotenv").config()
const { STRIPE_SECRET_KEY } = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)

module.exports = {
  stripeCharge: async (req, res) => {
    const { cartTotal, token } = req.body

    console.log("THIS IS THE CART TOTAL", cartTotal)
    console.log("THIS IS THE CART TOKEN", token)
    const roundTotal = cartTotal.toFixed(0)

    console.log("THIS IS THE TOTAL ROUNDED", roundTotal)

    try {
      let { status } = await stripe.charges.create({
        amount: roundTotal,
        currency: "usd",
        description: "An example charge",
        source: token
      })

      res.status(200).send(status)
    } catch (err) {
      res.status(500).end()
    }
  }
}