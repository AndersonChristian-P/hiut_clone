require("dotenv").config()
const express = require("express")
const app = express()
const massive = require("massive")
const session = require("express-session")
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, STRIPE_SECRET_KEY } = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)
const loginRegCtrl = require("./controllers/loginRegCtrl")
const prodCtrl = require("./controllers/productsCtrl")
const cartCtrl = require("./controllers/cartCtrl")

// -- MIDDLEWARE -- //
app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 72
  }
}))

app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = []
    req.session.total = 0
    req.session.vat = 0
  }
  next()
})

// -- MASSIVE -- //
massive(CONNECTION_STRING).then((database) => {
  app.set("db", database)
  console.log("database set!")
  console.log(database.listTables())
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})

// -- ENDPOINTS -- //

// Authentication
app.get("/api/users", loginRegCtrl.getUsers)
app.post("/auth/register", loginRegCtrl.register)
app.post("/auth/login", loginRegCtrl.login)
app.get("/auth/logout", loginRegCtrl.logout)

// Addresses
app.get("/auth/addresses/:userId", loginRegCtrl.getAddresses)
app.post("/auth/addresses/:userId", loginRegCtrl.addAddress)

// Products
app.get("/api/collections/:sex", prodCtrl.getProducts)
app.get("/api/product/men/:productId", prodCtrl.getMenProduct)
app.get("/api/product/women/:productId", prodCtrl.getWomenProduct)

// Cart
app.get("/api/cart", cartCtrl.getCart)
app.get("/api/total", cartCtrl.getTotal)
app.get("/api/vat", cartCtrl.getVatAmnt)
app.post("/api/addtocart/:idText", cartCtrl.addToCart)
app.put("/api/updatecart", cartCtrl.updateCart)
app.delete("/api/deletefromcart/:idText/:size1/:size2/:quantity/:price/", cartCtrl.deleteItemFromCart)
app.post("/api/clearcart", cartCtrl.clearCart)

// Stripe | did not create a controller because there's only one end point
app.post("/charge", async (req, res) => {
  const { cartTotal, token } = req.body

  try {
    let { status } = await stripe.charges.create({
      amount: cartTotal,
      currency: "GBP",
      description: "An example charge",
      source: token
    })

    console.log("THIS IS THE STRIPE STATUS:", status)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).end()
  }
})