module.exports = {
  addToCart: async (req, res) => {
    const { idText: id } = req.params
    const { size, quantity, img1, prod_title, price } = req.body
    const { cart } = req.session

    const index = await cart.findIndex(prod => prod.id === id)

    if (index === -1) {
      const newItem = {
        id, size, quantity, img1, prod_title, price
      }

      const newCart = req.session.cart.slice()

      newCart.push(newItem)

      req.session.cart = newCart

    } else {
      cart[index].quantity++
    }

    req.session.save()
    // since we are not calling res.send the session is not saved, so you have to call req.session.save()
  },

  getCart: async (req, res) => {
    await console.log("THIS IS THE GET CART EVENT", req.session)
    const { cart } = req.session
    res.status(200).send(cart)
  }
}