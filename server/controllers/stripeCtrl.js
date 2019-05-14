require("dotenv").config()
const { STRIPE_SECRET_KEY } = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)

module.exports = {
  stripeCharge: async (req, res) => {
    const { cartTotal, token } = req.body

    try {
      let { status } = await stripe.charges.create({
        amount: cartTotal,
        currency: "GBP",
        description: "An example charge",
        source: token
      })

      res.status(200).send(status)
    } catch (err) {
      res.status(500).end()
    }
  }
}