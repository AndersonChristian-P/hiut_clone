module.exports = {
  addToCart: async (req, res) => {
    const { idText: id } = req.params
    const { size, quantity, img1, prod_title, price, vatAmnt: vat } = req.body
    const { cart } = req.session

    const index = await cart.findIndex(prod => prod.id === id)

    const prodSubtotal = (+quantity * +price)

    if (index === -1) {
      const newItem = { id, size, quantity, img1, prod_title, prodSubtotal, price }
      req.session.total += price
      req.session.vat += vat
      req.session.cart.push(newItem)
    } else if (index > -1) {
      const sizeInCart = cart[index].size
      if (sizeInCart !== size) {
        const newItem = { id, size, quantity, img1, prod_title, prodSubtotal, price }
        req.session.total += price
        req.session.vat += vat
        req.session.cart.push(newItem)
      } else {
        cart[index].quantity++
        cart[index].prodSubtotal += price
        req.session.total += price
        req.session.vat += vat
      }
    }
    req.session.save()
    res.sendStatus(200)
  },

  getCart: async (req, res) => {
    const { cart } = req.session
    try {
      let returnCart = await cart
      if (returnCart) {
        res.status(200).send(returnCart)
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  },

  getTotal: async (req, res) => {
    const { total: userTotal } = req.session
    try {
      let returnTotal = await userTotal.toString()
      if (returnTotal) {
        res.status(200).send(returnTotal)
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  },

  getVat: async (req, res) => {
    const { vat } = req.session
    try {
      let returnVat = await vat.toString()
      if (returnVat) {
        res.status(200).send(returnVat)
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  },

  deleteItemFromCart: async (req, res) => {
    const { cart } = req.session
    const { idText: id, size1, size2, quantity, price } = req.params
    const size = `${size1}/${size2}`

    const index = await cart.findIndex(prod => prod.id === id && prod.size === size)
    const vatRate = req.session.vat / req.session.total

    cart.splice(index, 1)
    req.session.total -= (quantity * price)
    const newVat = req.session.total * vatRate
    req.session.vat = newVat
    req.session.save()

    res.sendStatus(200)
  },

  updateCart: async (req, res) => {
    const { cart: userCart, vatAmnt: vat } = req.body

    const cartWithNewSubtotals = userCart.map((item) => {
      return { ...item, prodSubtotal: (+item.quantity * +item.price) }
    })

    const newTotal = await userCart.map((item) =>
      item.quantity * item.price
    ).reduce(((acc, val) => acc + val), 0)

    const vatRate = req.session.vat / req.session.total
    const newVat = newTotal * vatRate

    req.session.cart = cartWithNewSubtotals
    req.session.total = newTotal
    req.session.vat = newVat

    req.session.save()
    res.sendStatus(200)
  },

  clearCart: (req, res) => {
    req.session.cart = []
    req.session.total = 0
    req.session.vat = 0
    res.sendStatus(200)
  }
}